import { Component, Input, OnInit, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Films } from 'src/api—studio-ghibli-case/models';
import { FilmsService } from 'src/api—studio-ghibli-case/services';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-movies-dialog',
  templateUrl: './movies-dialog.component.html',
  styleUrls: ['./movies-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule],
})
export class MoviesDialogComponent implements OnInit {
  @Input() idFilmsChild: any;
  constructor(private moviesService: FilmsService) {}
  ngOnInit() {
    this.getMoviesId();
  }

  movie$: any;

  private route = inject(ActivatedRoute)

  getMoviesId() {
    this.moviesService
      .getFilmsId({ id: this.idFilmsChild })
      .subscribe((data: Films[]) => {
        console.log(data);
      });
  }

}
