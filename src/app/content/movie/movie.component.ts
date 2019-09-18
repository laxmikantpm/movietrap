import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  public trailerKey: any;
  public movie :any;
  public postPath = 'http://image.tmdb.org/t/p/w300//';
  public url:any;
  public load: boolean = false;
  title:any;
  overview:any;
  genres:any = [];
  poster:any;
 

  constructor(public rest:RestService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.genres = [];
    this.route.paramMap.subscribe(params => {
      let movieID = params.get('id')
      this.rest.getMovieDetail(movieID).subscribe( d =>{
        this.movie = d;
        this.title = this.movie.original_title;
        this.overview = this.movie.overview;
        this.poster = "https://image.tmdb.org/t/p/original/"+this.movie.poster_path;
        for(var type in this.movie.genres){
          this.genres.push(this.movie.genres[type].name);
        }
        //this.genres = this.movie.genres[0].name;
        console.log(this.movie, " ===================== //////");
        console.log(this.genres, " ===================== //////");
        //localStorage.setItem('movie_detail', this.movie);
      })   
      this.rest.getMovieTrailer(movieID).subscribe( m =>{
        //console.log(" ============ ", m);
        this.trailerKey = m.results[0].key
        localStorage.setItem('movie_key', this.trailerKey)
        //console.log(this.trailerKey);
        this.url = 'http://www.youtube.com/watch?v=' + this.getKey('movie_key');
        this.load = true;
        this.getScript();
      });
    });
    
    
  }

  getKey(id :any){
    return localStorage.getItem(id);

  }
  
  getScript(){
    
    $(document).ready(function () {
      setTimeout(() => {
        
      }, 3000);
          $('#player').mediaelementplayer();
          $('#youtube1').mediaelementplayer();

    });
  }
}
