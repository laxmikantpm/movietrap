import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MovieTrap';

  private apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=';
  private apiKey = '17241ed3b7514eceb74d689f30dcaddf';

  constructor(private http: HttpClient, private route:Router){}

  ngOnInit(): void{

    localStorage.setItem('apiKey', this.apiKey);

    this.http.get(this.apiUrl + this.apiKey)
    .subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log("Did not occured");
      }
    );
  }
}
