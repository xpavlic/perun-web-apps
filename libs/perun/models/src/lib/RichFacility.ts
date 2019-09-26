import { Owner } from '@perun-web-apps/perun/models';

export interface RichFacility {
  id: number;
  name: String;
  description: String;
  facilityOwners: Owner[];
}
