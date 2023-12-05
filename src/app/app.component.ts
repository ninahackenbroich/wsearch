import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  results: any[] = [];
  term: string = '';
  constructor(private wikipediaService: WikipediaService) { }

  onTerm(term: string) {
    this.wikipediaService.search(term).subscribe({
      next: (response: any) => {
        // Handle the response here
        console.log(response);
        this.term = term;
        this.results = response.query.search;
      },
      error: (error) => {
        // Handle the error
        console.log(error);
      },
      complete: () => {
        // Handle the completion
        console.log('Search completed');
      }
    });
  }
}
