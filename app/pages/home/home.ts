
import {Component, ViewChild} from '@angular/core';
import {ViewController, Platform, Content, Nav} from 'ionic-angular';
import {AuthService} from '../../services/auth/auth';
import {NavController} from 'ionic-angular';
import {StatisticsPage} from '../statistics/statistics';
import {ListOfActivitiesPage} from '../list-of-activities/list-of-activities';
import {FriendsPage} from '../friends/friends';

@Component({
  templateUrl: 'build/pages/home/home.html'
})


export class HomePage {
  private tabStatistics;
  private tabActivites;
  private tabFriends;

  constructor(private auth: AuthService, private navCtrl: NavController) {
    this.tabActivites = ListOfActivitiesPage;
    this.tabStatistics = StatisticsPage;
    this.tabFriends = FriendsPage;
    
    auth.setNavCtrl(navCtrl);
  }


   
}