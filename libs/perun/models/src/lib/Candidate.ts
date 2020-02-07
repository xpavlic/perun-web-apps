import { User, UserExtSource } from '@perun-web-apps/perun/openapi';

export interface Candidate extends User{
  userExtSource: UserExtSource;
  attributes: Map<string, string>;
  additionalUserExtSource: UserExtSource[];
}
