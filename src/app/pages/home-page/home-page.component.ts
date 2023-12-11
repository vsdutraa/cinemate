import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  popularFilms!: any[];
  popularTvShows!: any[];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getPopularFilms().subscribe((data) => {
      this.popularFilms = data.results.slice(0, 5);
    });
    this.filmService.getPopularTvShows().subscribe((data) => {
      this.popularTvShows = data.results.slice(0, 5);
    });
  }
}
