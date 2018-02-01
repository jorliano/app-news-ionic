import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public title='Fist Page'
  constructor(public navCtrl: NavController) {}

  public welcome(num1,num2){
    alert(num1+num2);
  }

  ionViewDidLoad() {
    //this.welcome(5,7);
  }

}
