import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Movie} from "../../models/Movie";

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

  getGenres(movie: Movie) {
    /**
     * Return the string of movie's genres of this format :
     * "Genre : Action" (if one genre only)
     * "Genres : Romance, Drama"
     */
    return movie.getGenres();
  }
}
