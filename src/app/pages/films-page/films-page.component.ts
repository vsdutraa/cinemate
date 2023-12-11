import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.css'],
})
export class FilmsPageComponent implements OnInit {
  popularFilms!: any[];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getPopularFilms().subscribe(
      (data: any) => {
        this.popularFilms = data.results;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
