import { Facility, RichDestination, Service } from '@perun-web-apps/perun/openapi';

export interface Task {
  id: number;
  delay: number;
  recurrence: number;
  startTime: number;
  sentToEngine: number;
  sendStartTime: number;
  schedule: number;
  genStartTime: number;
  genEndTime: number;
  sendEndTime: number;
  endTime: number;
  service: Service;
  facility: Facility;
  destinations: RichDestination;
  status: string;
  sourceUpdated: boolean;
  propagationForced: boolean;
}
