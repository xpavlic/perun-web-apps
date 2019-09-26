import { Resource, Task } from '@perun-web-apps/perun/models';

export interface ResourceState {
  resource: Resource;
  taskList: Task[];
}
