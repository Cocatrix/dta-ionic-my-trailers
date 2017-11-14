import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {TrailersPage} from "../pages/trailers/trailers";
import {LoginPage} from "../pages/login/login";
import {BookmarksPage} from "../pages/bookmarks/bookmarks";
import {PreferencesPage} from "../pages/preferences/preferences";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  public rootPage: any = TrailersPage;
  public pages: Array<any> = [TrailersPage, LoginPage, BookmarksPage, PreferencesPage];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
/*
  ngOnInit() {
    console.log(this.rootPage);
    this.nav.push(this.rootPage);
  }
*/
  pushPage(page: any) {
    this.nav.push(page);
  }
}
