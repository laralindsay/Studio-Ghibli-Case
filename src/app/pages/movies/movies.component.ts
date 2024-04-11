import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { CommonModule } from '@angular/common';
import { Films } from './../../../api—studio-ghibli-case/models/films';
import { FilmsService } from 'src/api—studio-ghibli-case/services';
import { MatButtonModule } from '@angular/material/button';
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
    MatSnackBarModule
  ],
})
export class MoviesComponent implements OnInit {
  @ViewChild('button')
  button!: ElementRef;

  constructor(
    private movieService: FilmsService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getMovies();
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  movie$: any;
  idFilmsChild!: any;
  idFavoriteFilms!: Films;
  durationInSeconds = 5;

  getMovies() {
    this.movieService.getFilms({}).subscribe((data: Films[]) => {
      this.movie$ = data;
    });
  }

  favoriteMovies() {
    this._snackBar.open('Film added to the list!', 'Okay', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 900,
    });
  }
}
