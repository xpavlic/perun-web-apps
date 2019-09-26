import {
  ApplicationState,
  ApplicationType,
  Group,
  User,
  Vo
} from '@perun-web-apps/perun/models';

export interface Application {
  id: number;
  beanName: string;
  createdAt: string;
  createdBy: string;
  extSourceLoa: number;
  extSourceName: string;
  extSourceType: string;
  fedInfo: string;
  group: Group;
  modifiedAt: string;
  modifiedBy: string;
  state: ApplicationState;
  type: ApplicationType;
  user: User;
  vo: Vo;
}
