import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() user : IUser;
  @Output() outUser : EventEmitter<IUser> = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
  }

  onValidate(): Boolean {
    if (this.user.id % 2 == 0) {
      return false
    }
    return true
  }

  onSendData(): void {
    this.outUser.emit(this.user);
  }
  
}
