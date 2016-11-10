import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GeolocationService} from '../../services/geolocation/geolocation'


/*
  Generated class for the RecordActivityPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

// Un bouton pour lancer l'enregistrement

// Un bouton pour l'arrêter

// Un bouton pour balancer le buffer dans la console
@Component({
  templateUrl: 'build/pages/record-activity/record-activity.html',
  providers: [GeolocationService],
})
export class RecordActivityPage {


  private geolocationService: GeolocationService;

  constructor(private navCtrl: NavController, geolocationService_: GeolocationService) {
    this.geolocationService = geolocationService_;
  }

  public start(){
      this.geolocationService.start();
  }

  public stop(){
      this.geolocationService.stop();
  }

  public flushLocationsInConsole(){
    this.geolocationService.flushLocationsInConsole()
  }
}
