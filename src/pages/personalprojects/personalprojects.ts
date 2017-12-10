import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// This is the personal projects page 1700009

@IonicPage()
@Component({
  selector: 'page-personalprojects',
  templateUrl: 'personalprojects.html',
})
export class PersonalprojectsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalprojectsPage');
  }

}
