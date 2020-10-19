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
