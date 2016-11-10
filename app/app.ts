import {Component, ViewChild, provide} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {StatisticsPage} from './pages/statistics/statistics'
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {AuthService} from './services/auth/auth';
import {RecordActivityPage} from './pages/record-activity/record-activity';
import {Http} from '@angular/http';


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Accueil', component: HomePage },
      { title: 'Profile', component: HomePage },
      { title: 'Enregistrer activité', component: RecordActivityPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp, [
  provide(AuthHttp, {
    useFactory: (http) => {
      return new AuthHttp(new AuthConfig({noJwtError: true}), http);
    },
    deps: [Http]
  }),
  AuthService]);
