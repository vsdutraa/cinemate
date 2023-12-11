import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css'],
})
export class SearchResultsPageComponent {
  searchResults: any[] = [];
  searchTerm: string = '';

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.searchTerm = params['searchTerm'];

      if (this.searchTerm) {
        this.filmService.searchContent(this.searchTerm).subscribe((data) => {
          this.searchResults = (data.results as any[]).filter(
            (result) =>
              result.backdrop_path !== null &&
              result.backdrop_path !== undefined
          );
          console.log(data.results);
        });
      }
    });
  }
}
