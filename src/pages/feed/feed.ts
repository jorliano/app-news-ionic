import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  provider: [
    MovieProvider
  ]
})
export class FeedPage {

  object_feed = {
    titulo: "Nova noticia",
    date: "Novemver 5, 2000",
    descricao: "Estou criando um app incrivel",
    qntd_likes: 10,
    qntd_comments: 4,
    time_comment: "11h ago"
  }

  public list_filmes = new Array<any>();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private movieProvider: MovieProvider) {
  }



  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data =>{
        console.log(data.results);           
        this.list_filmes = data.results;
      },erro => {
        console.log(erro);
      });

    console.log('ionViewDidLoad FeedPage');
  }


}
