import { AttributeDefinition } from '@perun-web-apps/perun/models';

export interface Attribute extends AttributeDefinition {
  createdAt: string;
  createdBy: string;
  createdByUid: number;
  modifiedAt: string;
  modifiedBy: string;
  modifiedByUid: number;
  value: any;
  valueCreatedAt: string;
  valueCreatedBy: string;
  valueModifiedAt: string;
  valueModifiedBy: string;
}
