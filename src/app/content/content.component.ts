import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  movies:any = [];
  public postPath = 'http://image.tmdb.org/t/p/w500//';
  public trailer = 'https://api.themoviedb.org/3/movie/420817/videos?api_key=17241ed3b7514eceb74d689f30dcaddf&language=en-US';
  movieKey:any;
  trailerKey:any;
  public allMoies: any = [];
  public mv:any = [];
  public mUrl = null;
  constructor(public rest:RestService, private router: Router) { }

  ngOnInit() {
    this.getMovies();    
  }

  getMovies(){
    this.movies = [];
    this.rest.getMovies().subscribe((data ={}) => {
      this.movies = data.results;
    });    
  }

}
