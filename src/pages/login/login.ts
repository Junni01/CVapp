import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * This is the login page
 * the user model is used to gather data an pass it to firebase
 * Right now the login only accepts the default email and password that
 * navigates the user to the menupage and let's him access the app
 * pretty simple stuff, no register page at the moment since it was not required
 * Saku Junni 1700009
 */


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  user = {} as User;

  constructor(private afauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }
// this is the function that handles passing the user data to firebase
doLogin(user: User) {
  const result = this.afauth.auth.signInWithEmailAndPassword(user.email, user.password)
  if (result) {
    this.navCtrl.setRoot('MenuPage');
  }
}

}
