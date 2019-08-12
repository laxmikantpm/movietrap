import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class Resolver implements Resolve<any> {   

    constructor(private api: RestService){}

    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<any> {
        return this.api.getMovieDetail(route.paramMap.get('id'));
        //return this.api.getMovies();
    }
}
