import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// This is the soft skills page Saku Junni 1700009

@IonicPage()
@Component({
  selector: 'page-softskills',
  templateUrl: 'softskills.html',
})
export class SoftskillsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoftskillsPage');
  }

}
