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

  news:any[]=[]
  sources:any[]=[]
  source:string="";
  

  ngOnInit(): void {
    this.newsService.getNews("bitcoin",this.source).then(data=>{
      this.news = data
      // console.log(this.news)
    }).catch(()=>{
      console.log("Fallo en news component")
    })

    this.newsService.getSources().then(data=>{
      this.sources = data
      // console.log(this.sources)
    }).catch(()=>{
      console.log("Fallo en sources")
    })
  }

  onChange():void{
    this.newsService.getNews("bitcoin",this.source).then(data=>{
      this.news = data
      // console.log(this.news)
    }).catch(()=>{
      console.log("Fallo en news component")
    })
  }

}
