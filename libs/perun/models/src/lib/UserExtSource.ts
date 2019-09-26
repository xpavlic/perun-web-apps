import { ExtSource } from '@perun-web-apps/perun/models';

export interface UserExtSource {
  beanName: string;
  createdAt: string;
  createdBy: string;
  createdByUid: string;
  extSource: ExtSource;
  id: number;
  loa: number;
  login: string;
  modifiedAt: string;
  modifiedBy: string;
  modifiedByUid: number;
  persistent: boolean;
  userId: number;
}
