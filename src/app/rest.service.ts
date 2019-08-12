import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'https://api.themoviedb.org/3/discover/movie';
const apiKey = '17241ed3b7514eceb74d689f30dcaddf';
const movieUrl = '?sort_by=popularity.desc&api_key=';
const trailer = 'https://api.themoviedb.org/3/movie/';//420817';//;/videos?api_key=17241ed3b7514eceb74d689f30dcaddf&language=en-US';
const tvideo = '/videos?api_key=17241ed3b7514eceb74d689f30dcaddf&language=en-US';
const movieDetail = 'https://api.themoviedb.org/3/movie/';//420817
const apiDetail = '?api_key=17241ed3b7514eceb74d689f30dcaddf&language=en-US';
const httpOptions = { 
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getMovies() :Observable<any> {
    return this.http.get(endpoint + movieUrl + apiKey).pipe(
      map(this.extractData)
    );
  }

  getMovieTrailer(id): Observable<any>{
    //return this.http.get(`${trailer}${id + tvideo}`);
    return this.http.get(trailer + id + tvideo).pipe(
      map(this.extractData)
    );
  }

  getMovieDetail(id){
    return this.http.get(movieDetail + id + apiDetail).pipe(
      map(this.extractData)
    );
  }

  /**
   * 
   * @param operation 
   * @param result 
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
