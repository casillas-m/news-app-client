import { Component, OnInit } from '@angular/core';
import { NesService} from "./../../globals/services/nes.service"
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  titulo:string = "holiwis"

  constructor(private newsService:NesService) {}

  news = []

  ngOnInit(): void {
    this.news = this.newsService.getNews()
  }
}
