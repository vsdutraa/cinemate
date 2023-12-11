import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-tv-shows-details-page',
  templateUrl: './tv-shows-details-page.component.html',
  styleUrls: ['./tv-shows-details-page.component.css'],
})
export class TvShowsDetailsPageComponent {
  tvShow!: any;
  credits!: any;
  year!: string;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const tvShowId = params['id'];

      this.filmService.getTvShowDetails(tvShowId).subscribe((details) => {
        this.tvShow = details;
        console.log(details);
        this.year = this.tvShow.first_air_date.substring(0, 4);
      });
    });
  }
}
