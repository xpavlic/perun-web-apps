import { Facility, ResourceTag, Vo } from '@perun-web-apps/perun/models';

export interface RichResource {
  id: number;
  facilityId: number;
  voId: number;
  name: String;
  description: String;
  vo: Vo;
  facility: Facility;
  resourceTags: ResourceTag[];
}
