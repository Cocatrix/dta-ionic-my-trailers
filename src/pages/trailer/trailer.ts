import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrailerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trailer',
  templateUrl: 'trailer.html',
})
export class TrailerPage {

  public movie: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movie = this.navParams.get('movieSent');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrailerPage');
  }

  static getPageName() {
    return 'Trailer';
  }

  getGenres(movie) {
    /**
     * TODO - Put this method in Movie class
     * Return the string of movie's genres of this format :
     * "Genre : Action" (if one genre only)
     * "Genres : Romance, Drama"
     */
    const genres = movie.genre;
    const nbGenres = genres.length;
    let genresString: string = (nbGenres > 1 ? 'Genres : ' : 'Genre : ');
    for(let i:number = 0;i<nbGenres-1;i++) {
      genresString = genresString + genres[i] + ", ";
    }
    return genresString + genres[nbGenres-1];
  }
}
