import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { AboutPage } from '../about/about';
import { CvPage } from '../cv/cv';
import { ProjectsPage } from '../projects/projects';
import { ExtraPage } from '../extra/extra';
import { ContactPage } from '../contact/contact';
// The tabs are defined here Saku Junni 1700009
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = 'AboutPage';
  tab2Root: any = 'CvPage';
  tab3Root: any = 'ProjectsPage';
  tab4Root: any = 'ExtraPage';
  tab5Root: any = 'ContactPage';
  myIndex: number;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

// This logs the succesful loading in the browser console
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
