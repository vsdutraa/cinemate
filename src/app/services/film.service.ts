import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private apiKey = 'b3c64dec94564277d0160a51636947a0';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  searchContent(query: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/search/multi?query=${query}&api_key=${this.apiKey}`
    );
  }

  getFilmDetails(filmId: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/movie/${filmId}?api_key=${this.apiKey}`
    );
  }

  getTvShowDetails(tvShowId: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/tv/${tvShowId}?api_key=${this.apiKey}`
    );
  }

  getFilmCredits(filmId: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/movie/${filmId}/credits?api_key=${this.apiKey}`
    );
  }

  getPopularFilms(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  getPopularTvShows(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tv/popular?api_key=${this.apiKey}`);
  }

  getLatestFilms(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/latest?api_key=${this.apiKey}`);
  }

  getLatestTvShows(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tv/latest?api_key=${this.apiKey}`);
  }
}
