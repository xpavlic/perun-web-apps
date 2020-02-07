import {Candidate} from './Candidate';
import { RichMember, RichUser } from '@perun-web-apps/perun/openapi';

export interface MemberCandidate {
  beanName: string;
  candidate: Candidate;
  member: RichMember;
  richUser: RichUser;
}
