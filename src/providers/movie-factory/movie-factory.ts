import {Injectable} from '@angular/core';
import {Movie} from '../../models/Movie';
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

  createMovie(movie, trailers) {
    this.movies.push(new Movie(movie, trailers));
  }

  createListMovies(result) {
    /**
     * With Json list, creates an array of movies.
     * Also calls createTrailer of trailerFactory for trailer property.
     */
    result.map(movie => this.createMovie(movie, this.trailerFactory.createTrailers(movie.trailers)));
    this.sortMovies();
    return new Promise(resolve => resolve(this.movies));
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
