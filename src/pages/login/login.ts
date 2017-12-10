import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';

/**
 * This is the login page
 * the user model is used to gather data an pass it to firebase
 * It now also features a register function that creates credentials to the firebase database.
 * 
 * 
 * 
 * Saku Junni 1700009
 */


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
// this is the function that handles passing the user data to firebase
doLogin(user: User) {
  const result = this.afauth.auth.signInWithEmailAndPassword(user.email, user.password)
  if (result) {
    this.navCtrl.setRoot('MenuPage');
  }
}
// This function passes the register data to the database and displays a popup to inform the user if it was successful or not.
async register(user: User) {

    const result2 = await this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password);

      if (result2) {
        let alert = this.alertCtrl.create({
          title: 'Success!',
          subTitle: 'Credentials created successfully',
          buttons: ['OK']
        });
        alert.present();
      } else {
        let alert = this.alertCtrl.create({
          title: 'Failure!',
          subTitle: 'Failed to register!',
          buttons: ['OK']
        });
        alert.present();

      }


}




}
