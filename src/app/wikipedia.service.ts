import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SearchResponse {
  query: {
    search: Array<{ title: string }>;
  };
}

@Injectable({
  providedIn: 'root'
})

export class WikipediaService {
  private url = 'https://en.wikipedia.org/w/api.php';

  constructor(public http: HttpClient) { }

  search(term: string) {
    const params = {
      action: 'query',
      list: 'search',
      srsearch: term,
      format: 'json',
      utf8: '1',
      origin: '*'
    };

    return this.http.get(this.url, { params });
  }
}
