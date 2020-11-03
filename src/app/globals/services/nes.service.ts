import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NesService {

  constructor() { }

  getNews(){
    return [
      {
        url: "#",
        title: "Noticia 1",
        image: "https://dummyimage.com/300.png/09f/fff"
      },
      {
        url: "#",
        title: "Noticia 1",
        image: "https://dummyimage.com/300.png/09f/fff"
      },
      {
        url: "#",
        title: "Noticia 1",
        image: "https://dummyimage.com/300.png/09f/fff"
      }
    ]
  }
}
