import { Injectable } from '@angular/core';
import { PerunBean, PerunPolicy, PerunPrincipal } from '@perun-web-apps/perun/openapi';
import { Role } from '@perun-web-apps/perun/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuiAuthResolver {

  constructor() {
  }

  private principal: PerunPrincipal;
  private perunPolicies: PerunPolicy[];

  private principalRoles: Set<Role> = new Set<Role>();

  private editableFacilities: number[] = [];
  private editableVos: number[] = [];
  private members: number[] = [];
  private user: number;
  private editableGroups: number[] = [];
  private observableVos: number[] = [];
  private hasGroupInTheseVos: number[] = [];

  init(principal: PerunPrincipal): void {
    this.principal = principal;
    this.initData(principal);
  }

  setPerunPolicies(policies: PerunPolicy[]): void {
    this.perunPolicies =  policies;
  }

  getPerunPolicies(): PerunPolicy[] {
    return this.perunPolicies;
  }

  isAuthorized(policy: string, objects: PerunBean[]): boolean {
    if (this.principal.roles === null) {
      return false;
    }

    const allPolicies: PerunPolicy[] = this.fetchPolicyWithAllIncludedPolicies(policy);
    let policyRoles: Array<{ [key: string]: string; }> = [];
    for (const policy of allPolicies) policyRoles = policy.perunRoles;

    //Fetch super objects like Vo for group etc.
    let mapOfBeans: { [key: string]: number[]; } = this.fetchAllRelatedObjects(objects);

    return this.resolveAuthorization(policyRoles, mapOfBeans);
  }

  private resolveAuthorization(policyRoles:Array<{ [key: string]: string; }>, mapOfBeans: { [key: string]: number[]; }) : boolean {
    //Traverse through outer role list which works like logical OR
    for (const roleArray of policyRoles) {
      let authorized = true;
      //Traverse through inner role list which works like logical AND
      for (const role in roleArray) {
        const roleObject = roleArray[role];
        if (roleObject === null) {
          if (!this.principalRoles.has(role as Role)) authorized = false;
        } else if (mapOfBeans[roleObject] === null) authorized = false;
        else {
          for (const objectId of mapOfBeans[roleObject]) {
            if (!this.principalHasRole(role, roleObject, objectId)) {
              authorized = false;
              break;
            }
          }
        }
        if (!authorized) break;
      }
      if (authorized) return true;
    }
    return false;
  }

  private fetchAllRelatedObjects(objects: PerunBean[]): {[key: string]: number[];} {
    let relatedObjects: PerunBean[] = [];
    //Create a map from objects for easier manipulation and duplicity prevention
    let mapOfBeans: { [key: string]: number[]; } = {};
    //Map<String, Set<Integer>> mapOfBeans = new HashMap<>();

    for (const object of objects) {
      relatedObjects.push(object);
      let retrievedObjects: PerunBean[] = RelatedObjectsResolver.getValue(object.getBeanName()).apply(object);
      relatedObjects.addAll(retrievedObjects);
    }

    //Fill map with PerunBean names as keys and a set of unique ids as value for each bean name
    for (PerunBean object : relatedObjects) {
      if (!mapOfBeans.containsKey(object.getBeanName())) mapOfBeans.put(object.getBeanName(), new HashSet<>());
      mapOfBeans.get(object.getBeanName()).add(object.getId());
    }

    return mapOfBeans;
  }

  private principalHasRole(role: string, perunBeanName: string, id: number): boolean {
    let convertedBeanName = perunBeanName;
    if (perunBeanName.startsWith('Rich')) {
      convertedBeanName = perunBeanName.substring(5);
    }
    return this.principal.roles[role] !== null && this.principal.roles[role][convertedBeanName]
      && this.principal.roles[role][convertedBeanName].indexOf(id) !== -1;
  }

  private fetchPolicyWithAllIncludedPolicies(policyName: string): PerunPolicy[] {
    const allIncludedPolicies: Map<string, PerunPolicy> = new Map();
    const policiesToCheck: string[] = [];
    policiesToCheck.push(policyName);

    while (policiesToCheck.length !== 0) {
      const policy = policiesToCheck.shift();
      if (allIncludedPolicies.has(policy)) {
        console.log("Policy {} creates a cycle in the included policies of the policy {}", policy, policyName);
        continue;
      }
      const policyToCheck = this.getPerunPolicy(policy);
      allIncludedPolicies.set(policy, policyToCheck);
      policiesToCheck.concat(policyToCheck.includePolicies);
    }

    let includedPolicies = [];
    for (const value of allIncludedPolicies.values()) {
      includedPolicies.push(value);
    }

    return includedPolicies;
  }

  private getPerunPolicy(policyName: string): PerunPolicy {
    for (const policy of this.perunPolicies) {
      if (policy.policyName === policyName) {
        return policy;
      }
    }
  }

  public canManageFacilities(): boolean {
    return this.hasAtLeasOne(Role.PERUNADMIN, Role.FACILITYADMIN);
  }

  public isPerunAdmin(): boolean {
    return this.principalRoles.has(Role.PERUNADMIN);
  }

  public isVoAdmin(): boolean {
    return this.hasAtLeasOne(Role.PERUNADMIN, Role.VOADMIN);
  }

  public isThisVoAdminOrObserver(id: number): boolean {
    return (this.editableVos.includes(id) || this.observableVos.includes(id) || this.principalRoles.has(Role.PERUNADMIN));
  }

  public isThisVoAdmin(id: number): boolean {
    return (this.editableVos.includes(id) || this.principalRoles.has(Role.PERUNADMIN));
  }

  public isGroupAdmin(): boolean {
    return this.hasAtLeasOne(Role.PERUNADMIN, Role.GROUPADMIN);
  }

  public isThisGroupAdmin(id: number): boolean {
    return (this.editableGroups.includes(id) || this.principalRoles.has(Role.PERUNADMIN));
  }

  public isGroupAdminInThisVo(id: number): boolean {
    return (this.hasGroupInTheseVos.includes(id));
  }

  public isFacilityAdmin(): boolean {
    return this.hasAtLeasOne(Role.PERUNADMIN, Role.FACILITYADMIN);
  }

  public isThisFacilityAdmin(id: number): boolean {
    return (this.editableFacilities.includes(id) || this.principalRoles.has(Role.PERUNADMIN));
  }

  public isResourceAdmin(): boolean {
    return this.hasAtLeasOne(Role.PERUNADMIN, Role.RESOURCEADMIN);
  }

  isVoObserver(): boolean {
    return (this.hasAtLeasOne(Role.PERUNADMIN, Role.VOOBSERVER));
  }

  isThisVoObserver(id: number): boolean {
    return (this.principalRoles.has(Role.PERUNADMIN) || this.observableVos.includes(id));
  }

  public getMemberIds(): number[] {
    return this.members;
  }

  /**
   * Initialises principal data which are used for later verification
   *
   * @param principal given principal
   */
  private initData(principal: PerunPrincipal) {
    this.user = principal.user.id;
    for (const [key, value] of Object.entries(this.principal.roles)) {
      if (principal.roles.hasOwnProperty(key)) {
        this.principalRoles.add(<Role>key);
      }
      for (const [keyInner, valueInner] of Object.entries(value)) {
        switch (key) {
          case Role.VOADMIN: {
            this.editableVos = <number[]>valueInner;
            break;
          }
          case Role.FACILITYADMIN: {
            this.editableFacilities = <number[]>valueInner;
            break;
          }
          case Role.GROUPADMIN: {
            if (keyInner === 'Group') {
              this.editableGroups = <number[]>valueInner;
            }
            if (keyInner === 'Vo') {
              this.hasGroupInTheseVos = <number[]>valueInner;
            }
            break;
          }
          case Role.SELF: {
            if (keyInner === 'Member') {
              this.members = <number[]>valueInner;
            }
            break;
          }
          case Role.VOOBSERVER: {
            this.observableVos = <number[]>valueInner;
            break;
          }
        }
      }
    }
  }

  /**
   * Returns true if the principal has at least one of the given roles.
   * Otherwise, returns false
   *
   * @param roles specified roles
   */
  private hasAtLeasOne(...roles: Role[]): boolean {
    for (const role of roles) {
      if (this.principalRoles.has(role)) {
        return true;
      }
    }
    return false;
  }
}
