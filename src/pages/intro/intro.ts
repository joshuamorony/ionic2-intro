import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class Intro {

  sliderOptions: any;

  constructor(public navCtrl: NavController) {
  
    this.sliderOptions = {
      pager: true
    };

  }

  goToHome(){
    this.navCtrl.setRoot('Tabs');
  }

}