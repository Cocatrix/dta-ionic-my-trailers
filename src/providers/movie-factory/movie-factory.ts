import {Injectable} from '@angular/core';
import {Movie} from '../../models/Movie';
import {MovieTrailer} from '../../models/MovieTrailer';
import {TrailerFactoryProvider} from '../trailer-factory/trailer-factory';

/*
  Generated class for the MovieFactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieFactoryProvider {

  public movies: Array<Movie> = [];

  constructor(public trailerFactory: TrailerFactoryProvider) {
    console.log('Hello MovieFactoryProvider Provider');
  }

  getMovies() {
    return new Promise((resolve => this.movies));
  }

  createMovie(title, release, studio, poster, moviesite, location, rating, genre, director, actors, trailers) {
    let movie = new Movie(title, release, studio, poster, moviesite, location, rating, genre, director, actors, trailers);
    this.movies.push(movie);
  }

  createListMovies(result) {
    /**
     * With Json list, creates an array of movies.
     * Also calls createTrailer of trailerFactory.
     */

    for (let movie of result) {
      const trailerTab: Array<MovieTrailer> = this.trailerFactory.createTrailers(movie.trailers);
      this.createMovie(
        movie.title,
        movie.release,
        movie.studio,
        movie.poster,
        movie.moviesite,
        movie.location,
        movie.rating,
        movie.genre,
        movie.director,
        movie.actors,
        trailerTab)
    }
    this.sortMovies();
    return new Promise(resolve => resolve(this.movies));
    //const listMoviesPromise = this.getMovies().then;
    //return listMoviesPromise;
  }

  static movieComparator(t1, t2) {
    /**
     * A comparator created to be able to sort movies by title.
     * With two movies, return -1 if t1 '<' t2, 1 if t1 '>' t2.
     */
    if (t1.title < t2.title) {
      return -1;
    } else if (t1.title > t2.title) {
      return 1;
    } else {
      return 0;
    }
  }

  sortMovies() {
    this.movies.sort(MovieFactoryProvider.movieComparator);
  }
}
