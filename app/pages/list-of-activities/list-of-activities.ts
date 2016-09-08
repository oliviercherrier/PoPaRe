import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';

import * as L from 'leaflet';
/*
  Generated class for the ListOfActivitiesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var omnivore: any;

@Component({
  templateUrl: 'build/pages/list-of-activities/list-of-activities.html',
})
export class ListOfActivitiesPage {

  activities: Array<{fileName: string, id: string}>;


  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // Create one div per activity to display
    this.activities = [];
    this.activities.push({fileName: 'tmp/gpx/Mollard.gpx', id:'Mollard'});
    this.activities.push({fileName: 'tmp/gpx/Mollard.gpx', id:'Mollard2'});

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }


  ionViewDidEnter (){
    // Populate each activity div with the related activity mapsCreate one div per activity to display
    //let my_map;
    // let runLayer;
    for (let activity of this.activities){
      let my_map = L.map('map_' + activity.id).setView([51.505, -0.09], 13);
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(my_map);
      let runLayer = omnivore.gpx(activity.fileName);
      runLayer.on('ready', function() {
          my_map.fitBounds(runLayer.getBounds());
        });
      runLayer.addTo(my_map);
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

}
