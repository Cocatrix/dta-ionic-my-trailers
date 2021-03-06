import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {LoginPage} from '../pages/login/login';
import {TrailerPage} from '../pages/trailer/trailer';
import {TrailersPage} from '../pages/trailers/trailers';
import {BookmarksPage} from '../pages/bookmarks/bookmarks';
import {PreferencesPage} from '../pages/preferences/preferences';
import {HttpClientModule} from "@angular/common/http";
import { HttpclientProvider } from '../providers/httpclient/httpclient';
import { MovieFactoryProvider } from '../providers/movie-factory/movie-factory';
import { TrailerFactoryProvider } from '../providers/trailer-factory/trailer-factory';

@NgModule({
  declarations: [
    MyApp,
    TrailersPage,
    TrailerPage,
    LoginPage,
    BookmarksPage,
    PreferencesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TrailersPage,
    TrailerPage,
    LoginPage,
    BookmarksPage,
    PreferencesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpclientProvider,
    MovieFactoryProvider,
    TrailerFactoryProvider
  ]
})
export class AppModule {
}
