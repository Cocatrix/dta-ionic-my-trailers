import {MovieTrailer} from "./MovieTrailer";

export class Movie {
  constructor(
    public title: string,
    public release: string,
    public studio: string,
    public poster: string,
    public moviesite: string,
    public location: string,
    public rating: string,
    public genre: Array<string>,
    public directors: string,
    public actors: Array<string>,
    public trailers: Array<MovieTrailer>
  ){}
}
