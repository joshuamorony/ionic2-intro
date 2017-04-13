import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class Intro {

  constructor(public navCtrl: NavController) {

  }

  goToHome(){
    this.navCtrl.setRoot('Tabs');
  }

}