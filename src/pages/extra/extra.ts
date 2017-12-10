import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// This is the extra curricular activities page Saku Junni 1700009

@IonicPage()
@Component({
  selector: 'page-extra',
  templateUrl: 'extra.html',
})
export class ExtraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtraPage');
  }

}
