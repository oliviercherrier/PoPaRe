
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ViewController, Platform} from 'ionic-angular';
import {StatisticsPage} from '../statistics/statistics';
import {ListPage} from '../list/list';



@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {

  tabStatistics = StatisticsPage;
  tabActivites = ListPage;

  constructor() {
  }
}