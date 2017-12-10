import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})

// This is the welcome slider that is displayed when the app is launched, there is a button at the end that takes the user to the login page Saku Junni 1700009
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }



moveOn() {
      this.navCtrl.setRoot('LoginPage');
    }


}

