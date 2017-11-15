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

  createTrailer(trailer) {
    return new MovieTrailer(trailer);
  }

  createTrailers(trailerList) {
    let trailerTab = [];
    trailerList.map(trailer => trailerTab.push(this.createTrailer(trailer)));
    return trailerTab;
  }
}
