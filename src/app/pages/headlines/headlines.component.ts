import { Component, OnInit } from '@angular/core';
import { NesService} from "./../../globals/services/nes.service"

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {

  news:any[]=[]
  country:string = "mx"
  constructor(private newsService:NesService) { }

  ngOnInit(): void {
    this.newsService.getHeadlines("mx").then(data=>{
      this.news = data
      console.log(this.news)
    }).catch(()=>{
      console.log("Fallo en news component")
    })
  }

  onChange(): void {
    this.newsService.getHeadlines(this.country).then(data=>{
      this.news = data
      console.log(this.news)
    }).catch(()=>{
      console.log("Fallo en news component")
    })
  }
}
