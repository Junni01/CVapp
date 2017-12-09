import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { CvPage } from '../cv/cv';
import { ProjectsPage } from '../projects/projects';
import { ExtraPage } from '../extra/extra';
import { ContactPage } from '../contact/contact';
import { TechskillsPage } from '../techskills/techskills';
import { SoftskillsPage } from '../softskills/softskills';
import { PersonalprojectsPage } from '../personalprojects/personalprojects';
import { AngularFireAuth } from 'angularfire2/auth';


export interface PageInterface {

title: string;
pageName: string;
tabComponent?: any;
index?: number;
icon: string;
}


// This is the menu part that handles the sidemenu functionality, I have been using this model for long and it seems to work fine. I experimented with different icons this time to make it better looking Saku Junni 1700009


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;
// here's the page interface with many pages using the tabspage-page. More icons to check out.
  pages: PageInterface[] = [
    { title: 'Personal Profile', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 0, icon: 'glasses'},
    {title: 'Technical Skills', pageName: 'TabsPage', tabComponent: 'CvPage', index: 1, icon: 'document'},
    {title: 'Soft Skills', pageName: 'TabsPage', tabComponent: 'SoftskillsPage', index: 2, icon: 'flag'},
    {title: 'Personal project', pageName: 'TabsPage', tabComponent: 'PersonalprojectsPage', index: 3, icon: 'archive'},
    {title: 'Team Project', pageName: 'TabsPage', tabComponent: 'ProjectsPage', index: 4, icon: 'contact'},
    {title: 'Extra Curriculum activities', pageName: 'TabsPage', tabComponent: 'ExtraPage', index: 5, icon: 'contact'},
    {title: 'Contact', pageName: 'TabsPage', tabComponent: 'ContactPage', index: 6, icon: 'contact'},
  ]






  constructor(public navCtrl: NavController, public navParams: NavParams, private afauth: AngularFireAuth) {
  }

  openPage(page: PageInterface) {
    let params = {};
    if(page.index){
      params = { tabIndex: page.index};
    }
  if(this.nav.getActiveChildNav() && page.index != undefined) {
    this.nav.getActiveChildNav().select(page.index);
  } else {
    this.nav.setRoot(page.pageName, params);
  }
  
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();
  
  if(childNav) {
    if(childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
      return 'primary';
    }
    return;
  }


  
  }

  public logout() {
    this.afauth.auth.signOut
    this.nav.setRoot('LoginPage');
  }

}
