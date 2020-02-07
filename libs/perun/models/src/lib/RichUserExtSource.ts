import { Attribute, UserExtSource } from '@perun-web-apps/perun/openapi';

export interface RichUserExtSource {
  userExtSource: UserExtSource;
  attributes: Attribute[];
}
