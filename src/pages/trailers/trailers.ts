import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpclientProvider} from "../../providers/httpclient/httpclient";
import {TrailerPage} from "../trailer/trailer";
import {MovieFactoryProvider} from "../../providers/movie-factory/movie-factory";
import {Movie} from "../../models/Movie";

/**
 * Generated class for the TrailersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trailers',
  templateUrl: 'trailers.html',

})
export class TrailersPage {

  public url: string = "http://10.1.1.116:8080/trailers";
  public trailers: Array<Movie>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpClientProvider: HttpclientProvider,
              public movieFactory: MovieFactoryProvider,
              ){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrailersPage');
    this.getTrailersFromHttp();
  }

  static getPageName() {
    return 'Trailers';
  }

  getTrailersFromHttp(givenUrl: string = this.url) {
    /**
     * Makes asynchronous call to given URL to get a list of movies in Json format.
     * The list is casted in Movie/Trailer types, then sorted (in createListMovies).
     */
    this.httpClientProvider.httpGet(givenUrl)
      .subscribe((result:any) => {
        console.log('next');
        this.movieFactory.createListMovies(result).then((movies) => {
          this.trailers = movies
        }, () => {
          console.log('error createListMovies');
        });
      }, () => {
        console.log('error');
      }, () => {
        console.log('complete');
      });
  }

  getGenres(movie: Movie) {
    /**
     * Return the string of movie's genres of this format :
     * "Genre : Action" (if one genre only)
     * "Genres : Romance, Drama"
     */
    return movie.getGenres();
  }

  seeMovieDetails(movie) {
    this.navCtrl.push(TrailerPage,{movieSent: movie}).then();
  }
}
