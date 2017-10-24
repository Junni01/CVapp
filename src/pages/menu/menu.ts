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





@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;

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

  }

  isActive(page: PageInterface) {

  }

}
