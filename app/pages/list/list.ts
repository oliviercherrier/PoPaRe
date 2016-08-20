import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ViewController, Platform} from 'ionic-angular';

@Component({
  template: `
<ion-header>
<ion-navbar primary>
    <button menuToggle>
    <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Nos activités</ion-title>
</ion-navbar>
</ion-header>
    <ion-content padding>
    <p>plop</p>
    </ion-content>
`})

class TabTextPage2 {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  template: `
<ion-header>
<ion-navbar primary>
    <button menuToggle>
    <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Mes activités</ion-title>
</ion-navbar>
</ion-header>
<ion-content padding>
<p>plop2</p>
</ion-content>
`})

class TabTextPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  templateUrl: 'build/pages/list/list.html'
})

export class ListPage {

  tabStatistics = TabTextPage;
  tabActivites = TabTextPage2;

  constructor() {
  }
}

/*import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';


@Component({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, navParams: NavParams) {
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

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
*/