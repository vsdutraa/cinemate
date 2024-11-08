import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FilmsPageComponent } from './pages/films-page/films-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmDetailsPageComponent } from './pages/film-details-page/film-details-page.component';
import { TvShowsPageComponent } from './pages/tv-shows-page/tv-shows-page.component';
import { TvShowsDetailsPageComponent } from './pages/tv-shows-details-page/tv-shows-details-page.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    FilmsPageComponent,
    FilmDetailsPageComponent,
    TvShowsPageComponent,
    TvShowsDetailsPageComponent,
    SearchbarComponent,
    SearchResultsPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
