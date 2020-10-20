import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  
  title = 'first-angular-app';
  imagen = '../assets/img/Batman.jpg';
  private showText = true;
  addClass = true;
  value = 1;
  date= '19/10/2020'
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

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @param  {String} url url of image
   */
  onChangeImage(url: string) {
    this.imagen = url;
  }

  /**
   * @return {axios}      showText boolean
   */
  onValidate() {
    return this.showText;
  }

  onChangeShow() {
    this.showText = !this.showText;
  }

  outUserMethod(user: IUser) {

  }

}
