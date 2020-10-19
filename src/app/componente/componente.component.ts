import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.scss']
})
export class ComponenteComponent implements OnInit {
  @Input() user : IUser;
  @Output() outUser : EventEmitter<IUser> = new EventEmitter<IUser>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSendData(): void {
    this.outUser.emit(this.user);
  }
}
