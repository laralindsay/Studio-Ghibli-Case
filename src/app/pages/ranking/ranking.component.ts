import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Films } from 'src/api—studio-ghibli-case/models';
import { FilmsService } from 'src/api—studio-ghibli-case/services';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule]
})
export class RankingComponent implements OnInit{
constructor(private rankingService: FilmsService){}
  ngOnInit() {
    this.getRanking()
  }

  movieScore$: any;

  getRanking(){
    this.rankingService.getFilms({}).subscribe((data: Films[]) => {
      this.movieScore$ = data;
    });
  }
}
