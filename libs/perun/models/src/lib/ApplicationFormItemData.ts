import { ApplicationFormItem } from '@perun-web-apps/perun/models';

export interface ApplicationFormItemData {
  assuranceLevel: string;
  beanName: string;
  formItem: ApplicationFormItem;
  id: number;
  prefilledValue: string;
  shortname: string;
  value: string;
}
