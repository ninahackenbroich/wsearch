import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
interface SearchResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
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

    return this.http.get<SearchResponse>(this.url, { params })
      .pipe(
        pluck('query', 'search')
      );
  }
}
