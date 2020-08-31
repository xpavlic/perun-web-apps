import {Component, EventEmitter, Input, Output} from '@angular/core';
import { GroupFlatNode } from '@perun-web-apps/perun/models';

@Component({
  selector: 'perun-web-apps-group-menu',
  templateUrl: './group-menu.component.html',
  styleUrls: ['./group-menu.component.scss']
})
export class GroupMenuComponent {

  constructor() { }

  @Input() group: GroupFlatNode;

  @Input() disabled = false;

  @Input() displayButtons: boolean;

  @Output() moveGroup: EventEmitter<void> = new EventEmitter<void>();

  @Output() syncGroup: EventEmitter<void> = new EventEmitter<void>();

  @Output() changeNameDescription: EventEmitter<void> = new EventEmitter<void>();

  onMoveGroup() {
    this.moveGroup.emit();
  }

  onSyncDetail() {
    this.syncGroup.emit();
  }

  onChangeNameDescription() {
    this.changeNameDescription.emit();
  }
}
