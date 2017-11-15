import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpclientProvider} from "../../providers/httpclient/httpclient";

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
  public trailers: Array<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpClientProvider: HttpclientProvider) {
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
     * The list is sorted right after.
     */
    this.httpClientProvider.httpGet(givenUrl)
      .subscribe((result:any) => {
        console.log('next');
        this.trailers = result;
        this.sortTrailers();
      }, () => {
        console.log('error');
      }, () => {
        console.log('complete');
      });
  }

  trailerComparator(t1, t2) {
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

  sortTrailers() {
    this.trailers.sort(this.trailerComparator);
  }

  getGenres(trailer) {
    /**
     * Return the string of movie's genres of this format :
     * "Genre : Action" (if one genre only)
     * "Genres : Romance, Drama"
     */
    const genres = trailer.genre;
    const nbGenres = genres.length;
    let genresString: string = (nbGenres > 1 ? 'Genres : ' : 'Genre : ');
    for(let i:number = 0;i<nbGenres-1;i++) {
      genresString = genresString + genres[i] + ", ";
    }
    return genresString + genres[nbGenres-1];
  }

}
