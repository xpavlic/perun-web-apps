import { Group } from '@perun-web-apps/perun/openapi';

export class TreeGroup implements Group {
  id: number;
  name: string;
  parentGroupId: number;
  voId: number;
  children: TreeGroup[];
  shortName: string;
  description: string;
  beanName: string;

  constructor(group: Group) {
    this.id = group.id;
    this.name = group.name;
    this.parentGroupId = group.parentGroupId;
    this.voId = group.voId;
    this.shortName = group.shortName;
    this.description = group.description;
  }

  addChild(group: TreeGroup) {
    if (this.children == null) {
      this.children = [group];
    } else {
      this.children.push(group);
    }
  }

}
