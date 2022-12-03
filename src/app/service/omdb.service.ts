import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  url = "https://www.omdbapi.com/?i=tt3896198&apikey=d8fee32c"

  constructor(private http: HttpClient  ) { }
    getQuery(query: string){
      const url = `${this.url} ${query}`;

      return this.http.get(url);
    }
}
