import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { openClose } from '@perun-web-apps/perun/animations';
import {
  DestinationPropagationType,
  DestinationType,
  FacilitiesManagerService,
  Facility,
  Host,
  Service,
  ServicesManagerService
} from '@perun-web-apps/perun/openapi';
import { FormControl, Validators } from '@angular/forms';

export interface  AddServicesDestinationDialogData {
  facility: Facility;
  theme: string;
}

@Component({
  selector: 'app-perun-web-apps-add-services-destination-dialog',
  templateUrl: './add-services-destination-dialog.component.html',
  styleUrls: ['./add-services-destination-dialog.component.scss'],
  animations: [
    openClose
  ]
})
export class AddServicesDestinationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddServicesDestinationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data:  AddServicesDestinationDialogData,
              public facilitiesManager: FacilitiesManagerService,
              public servicesManager: ServicesManagerService) { }

  hosts: Host[];
  servicesOnFacility: boolean;
  services: Service[] = [];
  serviceControl: FormControl;
  types: string[] = ['host', 'user@host', 'user@host:port','user@host-windows', 'host-windows-proxy',
    'url', 'mail', 'semail', 'service-specific'];
  selectedType = 'host';
  propagations: string[] = ['PARALLEL', 'DUMMY'];
  selectedPropagation  = 'PARALLEL';
  destinationControl: FormControl;
  useFacilityHost = false;
  loading = false;
  emailControl: FormControl;
  emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  ngOnInit() {
    this.loading = true;
    this.serviceControl = new FormControl(undefined, Validators.required);
    this.destinationControl = new FormControl('', Validators.required);
    this.emailControl = new FormControl("", [Validators.required, Validators.pattern(this.emailRegex)]);
    this.facilitiesManager.getHosts(this.data.facility.id).subscribe( hosts => {
      this.hosts = hosts;
      this.servicesOnFacility = true;
      this.getServices();
      this.loading = false;
    }, () => this.loading = false);
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.loading = true;

    if (this.serviceControl.value === 'all') {
      if (this.useFacilityHost) {
        this.servicesManager.addDestinationsDefinedByHostsOnFacilityWithListOfServiceAndFacility(
          {services: this.services, facility: this.data.facility.id}).subscribe( () => {
          this.dialogRef.close(true);
        }, () => this.loading = false);
      }
      else {
        this.servicesManager.addDestinationToMultipleServices({services: this.services, facility: this.data.facility.id,
        destination: this.destinationControl.value, type: this.selectedType as DestinationType,
          propagationType: this.selectedPropagation as DestinationPropagationType}).subscribe( () => {
          this.dialogRef.close(true);
        }, () => this.loading = false);
      }
    } else {
      if (this.useFacilityHost) {
        this.servicesManager.addDestinationsDefinedByHostsOnFacilityWithServiceAndFacility(
          this.serviceControl.value.id, this.data.facility.id
        ).subscribe( () => {
          this.dialogRef.close(true);
        }, () => this.loading = false);
      }
      else {
        this.servicesManager.addDestination(this.serviceControl.value.id, this.data.facility.id,
          this.destinationControl.value, this.selectedType as DestinationType,
          this.selectedPropagation as DestinationPropagationType).subscribe( () => {
          this.dialogRef.close(true);
        }, () => this.loading = false);
      }
    }
  }

  getServices() {
    this.loading = true;
    if (this.servicesOnFacility) {
      this.servicesManager.getAssignedServices(this.data.facility.id).subscribe( services => {
        this.services = services;
      }, () => this.loading = false);
    } else {
      this.servicesManager.getServices().subscribe( services => {
        this.services = services;
      }, () => this.loading = false);
    }
    this.loading = false;
    this.serviceControl.setValue(undefined);
  }

  getTypeForView(type: string) {
    if (type === 'semail') {
      return 'Send Mail';
    }
    if (type === 'service-specific') {
      return 'Service Specific';
    }
    return type;
  }

  selectedTypeIsMail() {
    return this.selectedType === 'mail' || this.selectedType === 'semail';
  }

  invalidDestination() {
    if (this.selectedType === 'host' && this.useFacilityHost) {
      return false;
    }

    if (this.selectedTypeIsMail()){
      return this.emailControl.invalid;
    }

    return this.destinationControl.invalid;
  }
}
