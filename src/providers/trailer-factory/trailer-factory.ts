import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MovieTrailer} from "../../models/MovieTrailer";

/*
  Generated class for the TrailerFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrailerFactoryProvider {

  constructor() { }

  createTrailer(postdate, url, type, exclusive, hd) {
    return new MovieTrailer(postdate, url, type, exclusive, hd);
  }

  createTrailers(trailerList) {
    let trailerTab = [];
    for (let trailer of trailerList) {
      trailerTab.push(this.createTrailer(
        trailer.posdate,
        trailer.url,
        trailer.type,
        trailer.exclusive,
        trailer.hd))
    }
    return trailerTab;
  }
}
