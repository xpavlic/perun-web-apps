import {Task} from './Task';
import { Resource } from '@perun-web-apps/perun/openapi';

export interface ResourceState {
  resource: Resource;
  taskList: Task[];
}
