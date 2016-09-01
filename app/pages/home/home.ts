
import {Component, ViewChild} from '@angular/core';
import {ViewController, Platform, Content, NavController, NavParams} from 'ionic-angular';
import {StatisticsPage} from '../statistics/statistics';
import {ListOfActivitiesPage} from '../list-of-activities/list-of-activities';


@Component({
  templateUrl: 'build/pages/home/home.html'
})


export class HomePage {

  tabStatistics = StatisticsPage;
  tabActivites = ListOfActivitiesPage;

  constructor() {
    
  }

}