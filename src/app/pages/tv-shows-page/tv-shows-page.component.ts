import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-tv-shows-page',
  templateUrl: './tv-shows-page.component.html',
  styleUrls: ['./tv-shows-page.component.css'],
})
export class TvShowsPageComponent {
  popularTvShows!: any[];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getPopularTvShows().subscribe((data) => {
      this.popularTvShows = data.results;
      console.log(data);
    });
  }
}
