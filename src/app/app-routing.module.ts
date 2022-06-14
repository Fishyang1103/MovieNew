import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'Home',
  //   pathMatch:'full'
  // },
  {
    path:'',
    component: HomeComponent
  },
  // {
  //   path:'movie',
  //   component: MovieComponent
  // },
  {
    path:'movie/:id',
    component: MovieDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
