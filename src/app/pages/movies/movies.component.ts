import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Films } from './../../../api—studio-ghibli-case/models/films';
import { FilmsService } from 'src/api—studio-ghibli-case/services';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatGridListModule,
    MatIconModule,
  ],
})
export class MoviesComponent implements OnInit {
  constructor(private movieService: FilmsService) {}

  ngOnInit() {
    this.getMovies();
  }

  movie$: any;

  getMovies() {
    this.movieService.getFilms({}).subscribe((data: Films[]) => {
      this.movie$ = data;
    });
  }
}
