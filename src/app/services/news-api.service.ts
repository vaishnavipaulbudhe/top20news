import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  api_key = 'd27f55bb18f8475299781bf1df8cc23c';

  constructor(private http: HttpClient) {}

  initArticles(country) {
    return this.http.get(
      'http://newsapi.org/v2/top-headlines?country=' +
        country +
        '&apiKey=' +
        this.api_key
    );
  }
  getArticleByID(country: String, source: String) {
    return this.http.get(
      'http://newsapi.org/v2/top-headlines?country=' +
        country +
        '&category=' +
        source +
        '&apiKey=' +
        this.api_key
    );
  }
}
