import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [ {
      path: '',
      pathMatch: 'full',
      redirectTo: 'movies'
    },
      {
        path: 'movies',
        loadChildren: () =>
          import('../../pages/movies/movies.routes').then(
            (m => m.MoviesRoutes)
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
