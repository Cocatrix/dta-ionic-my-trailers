import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Movie} from "../../models/Movie";

/*
  Generated class for the MovieFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieFactoryProvider {

  public trailers: Array<Movie>;

  constructor(public http: HttpClient) {
    console.log('Hello MovieFactoryProvider Provider');
  }

}
