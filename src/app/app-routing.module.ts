import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importing components
import { MovieComponent } from './content/movie/movie.component';
import { ContentComponent } from './content/content.component';
import { Resolver } from './resolver';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,    
  },
  {
    path: 'movie/:id',
    component: MovieComponent, 
    resolve: {
      movie: Resolver,
    }   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
