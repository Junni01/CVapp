import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { AboutPage } from '../about/about';
import { CvPage } from '../cv/cv';
import { ProjectsPage } from '../projects/projects';
import { ExtraPage } from '../extra/extra';
import { ContactPage } from '../contact/contact';
import { TechskillsPage } from '../techskills/techskills';
import { SoftskillsPage } from '../softskills/softskills';
import { PersonalprojectsPage } from '../personalprojects/personalprojects';
import { AngularFireAuth } from 'angularfire2/auth';

// The tabs are defined here Saku Junni 1700009
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = 'AboutPage';
  tab2Root: any = 'TechskillsPage';
  tab3Root: any = 'SoftskillsPage';
  tab4Root: any = 'PersonalprojectsPage';
  tab5Root: any = 'ProjectsPage';
  tab6Root: any = 'ExtraPage';
  tab7Root: any = 'ContactPage';
  myIndex: number;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

// This logs the succesful loading in the browser console
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
