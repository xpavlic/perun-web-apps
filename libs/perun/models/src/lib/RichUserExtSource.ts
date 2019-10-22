import { Attribute, UserExtSource } from '@perun-web-apps/perun/models';

export interface RichUserExtSource {
  userExtSource: UserExtSource;
  attributes: Attribute[];
}
