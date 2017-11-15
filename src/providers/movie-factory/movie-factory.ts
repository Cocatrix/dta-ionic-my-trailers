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
  /**
   * TODO - Handle all movie manipulations here
   * Use Movie and Trailer classes
   */
  public movies: Array<Movie> = [];

  constructor() {
    console.log('Hello MovieFactoryProvider Provider');
  }

  createMovie(title, release, studio, poster, moviesite, location, rating, genre, director, actors, trailers) {
    let movie = new Movie(title, release, studio, poster, moviesite, location, rating, genre, director, actors, trailers);
    this.movies.push(movie);
    return movie;
  }
}
