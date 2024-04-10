import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

import { CommonModule } from '@angular/common';
import { DialogComponent } from '@app/components/dialog/dialog.component';
import { Films } from './../../../api—studio-ghibli-case/models/films';
import { FilmsService } from 'src/api—studio-ghibli-case/services';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
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
    RouterModule
  ],
})
export class MoviesComponent implements OnInit {
  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;

  constructor(private movieService: FilmsService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getMovies();
  }

  movie$: any;

  getMovies() {
    this.movieService.getFilms({}).subscribe((data: Films[]) => {
      this.movie$ = data;
    });
  }

  openDialog(id: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      restoreFocus: false,
    });
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
    console.log(id)
  }
}
