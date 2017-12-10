import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// This is the technical skills page Saku Junni 1700009

@IonicPage()
@Component({
  selector: 'page-techskills',
  templateUrl: 'techskills.html',
})
export class TechskillsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TechskillsPage');
  }

}
