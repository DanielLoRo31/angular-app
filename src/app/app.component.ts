import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-angular-app';
  imagen = "../assets/img/Batman.jpg";
  items = [{name: 'daniel'}, {name: 'fabri'}]
  private showText = true;
  value = 1;

  onChangeImage(url: string){
    this.imagen = url
  }
  onValidate(){
    return this.showText
  }

  onChangeShow(){
    this.showText = !this.showText
  }
}
