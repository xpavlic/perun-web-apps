import {Component} from '@angular/core';
import {NotificationData} from '../../models/NotificationData';
import {NotificatorService} from '../../../core/services/common/notificator.service';
import {flyInOut} from '../../animations/Animations';
import { doAfterDelay } from '@perun-web-apps/perun/utils';

@Component({
  selector: 'app-notificator',
  templateUrl: './notificator.component.html',
  styleUrls: ['./notificator.component.scss'],
  animations: [
    flyInOut
  ]
})
export class NotificatorComponent {

  constructor(
    private notificator: NotificatorService,
  ) {
    this.notificator.addNotification.subscribe(notificationData => {
      this.processNotification(notificationData);
    });
  }

  notifications: NotificationData[] = [];

  private processNotification(data: NotificationData): void {
    this.notifications.push(data);

    doAfterDelay(data.delay, () => {
      this.notifications.shift();
    });
  }
}
