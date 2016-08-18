
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ViewController, Platform} from 'ionic-angular';
import {StatisticsPage} from '../statistics/statistics';
import {ListPage} from '../list/list';

@Component({
  template: `
<ion-header>
<ion-navbar>
    <button menuToggle>
    <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Home</ion-title>
</ion-navbar>
</ion-header>
    <ion-content padding>
    <p>plop</p>
    </ion-content>
`})

class TabTextPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {

  tabStatistics = StatisticsPage;
  tabActivites = ListPage;

  constructor() {
  }
}