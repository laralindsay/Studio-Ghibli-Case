import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';

import { CommonModule } from '@angular/common';
import { Films } from './../../../api—studio-ghibli-case/models/films';
import { FilmsService } from 'src/api—studio-ghibli-case/services';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuTrigger } from '@angular/material/menu';
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
    MatDialogModule,
    RouterModule,
    MoviesDialogComponent
  ],
})
export class MoviesComponent implements OnInit {
  @Input() idFilmsChild = new Array();
  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;


  constructor(
    private movieService: FilmsService,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.getMovies();
  }

  movie$: any;


  getMovies() {
    this.movieService.getFilms({}).subscribe((data: Films[]) => {
      this.movie$ = data;
    });
  }

  openDialog( ) {
    const dialogRef = this.dialog.open(MoviesDialogComponent, {
      restoreFocus: false
    });
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }


}
