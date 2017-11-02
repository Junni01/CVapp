import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { CvPage } from '../cv/cv';
import { ProjectsPage } from '../projects/projects';
import { ExtraPage } from '../extra/extra';
import { ContactPage } from '../contact/contact';


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
    { title: 'About', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 0, icon: 'glasses'},
    {title: 'CV', pageName: 'TabsPage', tabComponent: 'CvPage', index: 1, icon: 'document'},
    {title: 'Project Work', pageName: 'TabsPage', tabComponent: 'ProjectsPage', index: 2, icon: 'flag'},
    {title: 'Extra', pageName: 'TabsPage', tabComponent: 'ExtraPage', index: 3, icon: 'archive'},
    {title: 'Contact', pageName: 'TabsPage', tabComponent: 'ContactPage', index: 4, icon: 'contact'},
  ]






  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
