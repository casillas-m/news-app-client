import { Injectable } from '@angular/core';
import {​​ HttpClient }​​ from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NesService {

  constructor(private http:HttpClient) { 

  }

  getNews(q:string, source:string):any{
    return this.http.get(`http://localhost:3000/api/news?q=${q}&source=${source}`).toPromise();
  }
  getHeadlines(country:string):any{
    return this.http.get(`http://localhost:3000/api/headlines?country=${country}`).toPromise();
  }
  getSources():any{
    return this.http.get(`http://localhost:3000/api/domains`).toPromise();
  }
}
