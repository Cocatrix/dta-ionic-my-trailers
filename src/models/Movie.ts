import {MovieTrailer} from "./MovieTrailer";

export class Movie {
  public title: string;
  public release: string;
  public studio: string;
  public poster: string;
  public moviesite: string;
  public location: string;
  public rating: string;
  public genre: Array<string>;
  public directors: string;
  public actors: Array<string>;
  public trailers: Array<MovieTrailer>;

  constructor({title, release, studio, poster, moviesite, location, rating, genre, director, actors}, trailers) {
    this.title = title;
    this.release = release ;
    this.studio = studio;
    this.poster = poster;
    this.moviesite = moviesite;
    this.location = location;
    this.rating = rating;
    this.genre = genre;
    this.directors = director;
    this.actors = actors;
    this.trailers = trailers;
  }

  getGenres() {
    /**
     * Return the string of movie's genres of this format :
     * "Genre : Action" (if one genre only)
     * "Genres : Romance, Drama"
     */
    const genres = this.genre;
    const nbGenres = genres.length;
    let genresString: string = (nbGenres > 1 ? 'Genres : ' : 'Genre : ');
    for(let i:number = 0;i<nbGenres-1;i++) {
      genresString = genresString + genres[i] + ", ";
    }
    return genresString + genres[nbGenres-1];
  }
}
