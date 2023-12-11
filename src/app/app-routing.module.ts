import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FilmsPageComponent } from './pages/films-page/films-page.component';
import { FilmDetailsPageComponent } from './pages/film-details-page/film-details-page.component';
import { TvShowsPageComponent } from './pages/tv-shows-page/tv-shows-page.component';
import { TvShowsDetailsPageComponent } from './pages/tv-shows-details-page/tv-shows-details-page.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'films', component: FilmsPageComponent },
  { path: 'films/:id', component: FilmDetailsPageComponent },
  { path: 'tv-shows', component: TvShowsPageComponent },
  { path: 'tv-shows/:id', component: TvShowsDetailsPageComponent },
  { path: 'search-results/:searchTerm', component: SearchResultsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
