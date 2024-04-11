import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatButton,
  MatButtonModule,
  MatIconButton,
} from '@angular/material/button';

import { CommonModule } from '@angular/common';
import { Films } from './../../../api—studio-ghibli-case/models/films';
import { FilmsService } from 'src/api—studio-ghibli-case/services';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MoviesDialogComponent } from './movies-dialog/movies-dialog.component';
import { RouterModule } from '@angular/router';

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
    RouterModule,
    MoviesDialogComponent,
  ],
})
export class MoviesComponent implements OnInit {
  @ViewChild('button')
  button!: MatIconButton;

  constructor(private movieService: FilmsService) {}

  ngOnInit() {
    this.getMovies();
  }

  movie$: any;
  idFilmsChild!: any;
  idFavoriteFilms!: Films;
  toggle = true;
  status = 'Enable';

  getMovies() {
    this.movieService.getFilms({}).subscribe((data: Films[]) => {
      this.movie$ = data;
    });
  }

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
}
