import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrailersPage } from './trailers';
import {HttpclientProvider} from "../../providers/httpclient/httpclient";

@NgModule({
  declarations: [
    TrailersPage,
  ],
  imports: [
    IonicPageModule.forChild(TrailersPage),
    HttpclientProvider
  ],
})
export class TrailersPageModule {}
