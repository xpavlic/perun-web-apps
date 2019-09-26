import { Facility, Service } from '@perun-web-apps/perun/models';

export class RichDestination {
  id: number;
  destination: string;
  service: Service;
  facility: Facility;
}
