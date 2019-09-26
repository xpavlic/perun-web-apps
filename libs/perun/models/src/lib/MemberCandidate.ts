import { Candidate, RichMember, RichUser } from '@perun-web-apps/perun/models';

export interface MemberCandidate {
  beanName: string;
  candidate: Candidate;
  member: RichMember;
  richUser: RichUser;
}
