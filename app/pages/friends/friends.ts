import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthService} from '../../services/auth/auth';

/*
  Generated class for the FriendsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/friends/friends.html',
})
export class FriendsPage {
  friends: Array<{name: string}>;
  constructor(private auth: AuthService, private navCtrl: NavController) {
    this.friends = [];
    this.friends.push({name: 'Anne Perdrillat'});
    this.friends.push({name: "Julie Morel"});
  }

  friendTapped(event, item) {
    /*this.navCtrl.push(ItemDetailsPage, {
      item: item
    });*/
  }

}
