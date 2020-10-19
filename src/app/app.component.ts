import { Component } from '@angular/core';
import { IUser } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: IUser[] = [
    {
      id: 0,
      name: 'daniel',
      description: 'Es un alumno',
      img: '../../assets/img/f4.jpg',
    },
    {
      id: 1,
      name: 'javi',
      description: 'Es un alumno',
      img: '../../assets/img/Batman.jpg',
    },
    {
      id: 2,
      name: 'fabri',
      description: 'Es un alumno',
      img: '../../assets/img/chepe.jpg',
    },
    {
      id: 3,
      name: 'mario',
      description: 'Es un alumno',
      img: '../../assets/img/mario.jpg',
    },
    {
      id: 4,
      name: 'diego',
      description: 'Es un alumno',
      img: '../../assets/img/cod.png',
    },
  ];


  outUserMethod(user: IUser) {
    console.log(user)
  }
}
