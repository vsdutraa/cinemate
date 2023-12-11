import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  searchTerm: string = '';

  constructor(private router: Router) {}

  searchContent() {
    if (this.searchTerm.trim() !== '') {
      this.router.navigate(['/search-results', this.searchTerm]);
    }
  }

  onEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchContent();
    }
  }
}
