import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class Tabs {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = 'Home';
  tab2Root: any = 'About';
  tab3Root: any = 'Contact';

  constructor() {

  }
}
