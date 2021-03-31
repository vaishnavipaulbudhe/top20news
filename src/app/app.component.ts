import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './services/news-api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: 'top20';
  mArticles: Array<any>;
  countries = [
    {
      id: 'us',
      name: 'United States',
    },
    {
      id: 'in',
      name: 'India',
    },
    {
      id: 'ca',
      name: 'Canada',
    },
  ];

  form = new FormGroup({
    country: new FormControl('in'),
    category: new FormControl(''),
  });

  constructor(private newsapi: NewsApiService) {}

  searchCountry() {
    this.mArticles = null;
    this.form.value.category = '';
    this.newsapi
      .initArticles(this.form.value.country)
      .subscribe((data) => (this.mArticles = data['articles']));
  }

  ngOnInit() {
    this.newsapi
      .initArticles(this.form.value.country)
      .subscribe((data) => (this.mArticles = data['articles']));
  }

  searchArticles(category) {
    this.form.value.category = category;
    this.mArticles = null;
    this.newsapi
      .getArticleByID(this.form.value.country, this.form.value.category)
      .subscribe((data) => (this.mArticles = data['articles']));
  }
}
