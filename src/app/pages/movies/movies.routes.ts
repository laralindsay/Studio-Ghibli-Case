import { MoviesComponent } from './movies.component';
import { Routes } from '@angular/router';

export const MoviesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MoviesComponent,
      },
    ],
  },
];
