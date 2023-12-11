import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-details-page',
  templateUrl: './film-details-page.component.html',
  styleUrls: ['./film-details-page.component.css'],
})
export class FilmDetailsPageComponent {
  film!: any;
  credits!: any;
  year!: string;
  director!: string;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const filmId = params['id'];

      this.filmService.getFilmDetails(filmId).subscribe((details) => {
        this.film = details;
        this.year = this.film.release_date.substring(0, 4);
        console.log(details);
      });

      this.filmService.getFilmCredits(filmId).subscribe((credits) => {
        this.credits = credits;
        this.director = credits.crew.find(
          (member: any) => member.job === 'Director'
        )?.name;
        console.log(credits);
      });
    });
  }
}
