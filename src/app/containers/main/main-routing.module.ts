import { RouterModule, Routes } from '@angular/router';

import { FavoritesComponent } from '@app/pages/favorites/favorites.component';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RankingComponent } from '@app/pages/ranking/ranking.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'movies',
      },
      {
        path: 'movies',
        loadChildren: () =>
          import('../../pages/movies/movies.routes').then(
            (m) => m.MoviesRoutes
          ),
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
      },
      {
        path: 'ranking',
        component: RankingComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
