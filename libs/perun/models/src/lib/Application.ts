import { ApplicationState } from './ApplicationState.enum';
import { ApplicationType } from './ApplicationType.enum';
import { Group, User, Vo } from '@perun-web-apps/perun/openapi';

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
