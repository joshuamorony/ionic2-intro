import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = TabsPage;
  loader: any;

  constructor(public platform: Platform, public loadingCtrl: LoadingController, public storage: Storage) {

    this.presentLoading();

    this.platform.ready().then(() => {

      this.storage.get('introShown').then((result) => {

        if(result){
          this.rootPage = TabsPage;
        } else {
          this.rootPage = IntroPage;
          this.storage.set('introShown', true);
        }

        this.loader.dismiss();
        
      });

    });

  }

  presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });

    this.loader.present();

  }

}