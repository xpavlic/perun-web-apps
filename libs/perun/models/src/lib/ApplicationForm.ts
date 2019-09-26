import { Group, Vo } from '@perun-web-apps/perun/models';

export interface ApplicationForm {
  automaticApproval: boolean;
  automaticApprovalExtension: boolean;
  beanName: string;
  group: Group;
  id: number;
  moduleClassName: string;
  vo: Vo;
}
