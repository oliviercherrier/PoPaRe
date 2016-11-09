import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthService} from '../../services/auth/auth';
import { BackgroundGeolocation } from 'ionic-native';
import { Platform } from 'ionic-angular';

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
  constructor(private auth: AuthService, private navCtrl: NavController, platform: Platform) {
    this.friends = [];
    this.friends.push({name: 'Anne Perdrillat'});
    this.friends.push({name: "Julie Morel"});


  platform.ready().then(() => {
      // IMPORTANT: BackgroundGeolocation must be called within app.ts and or before Geolocation. Otherwise the platform will not ask you for background tracking permission.

      // BackgroundGeolocation is highly configurable. See platform specific configuration options
      let config = {
              desiredAccuracy: 10,
              stationaryRadius: 20,
              distanceFilter: 30,
              debug: false, //  enable this hear sounds for background-geolocation life-cycle.
              stopOnTerminate: false, // enable this to clear background location settings when the app terminates
      };


      BackgroundGeolocation.configure(config).then((location) => {
          console.log('[js] BackgroundGeolocation callback:  ' + location.latitude + ',' + location.longitude);
          // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
          // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
          // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
          BackgroundGeolocation.finish(); // FOR IOS ONLY

      }).catch((err) => console.log("BackgroundGeolocation error ", err));

      // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
      BackgroundGeolocation.start();
  });
  }

  friendTapped(event, item) {
    /*this.navCtrl.push(ItemDetailsPage, {
      item: item
    });*/
  }

}
