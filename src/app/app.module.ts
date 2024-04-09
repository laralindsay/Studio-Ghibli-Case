import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingService } from './services/loading.service';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RankingComponent } from './pages/ranking/ranking.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HeaderComponent,
    FavoritesComponent,
    RankingComponent,
    SearchComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: LoadingService, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
