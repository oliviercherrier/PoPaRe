
import {Component, ViewChild} from '@angular/core';
import {ViewController, Platform, Content, NavController, NavParams} from 'ionic-angular';
import {StatisticsPage} from '../statistics/statistics';
import {ListPage} from '../list/list';


@Component({
  templateUrl: 'build/pages/home/home.html'
})


export class HomePage {
  @ViewChild(Content) content: Content;

  tabStatistics = StatisticsPage;
  tabActivites = ListPage;

  constructor() {
    
  }

}