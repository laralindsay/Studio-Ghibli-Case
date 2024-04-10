import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Films } from 'src/api—studio-ghibli-case/models';
import { FilmsService } from 'src/api—studio-ghibli-case/services';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatDialogModule],
})
export class DialogComponent implements OnInit{
  constructor(private movieService: FilmsService) {}
  ngOnInit() {
    this.getMovies()
  }

  movie$: any;
  getMovies(){
    this.movieService.getFilms({}).subscribe((data: Films[]) => {
      this.movie$ = data
    })
  }
}
