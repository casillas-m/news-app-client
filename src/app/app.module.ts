import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './pages/news/news.component';
import { MenuComponent } from './menu/menu.component';
import { HeadlinesComponent } from './pages/headlines/headlines.component';
import { Page404Component } from './pages/page404/page404.component';
import {​​ HttpClientModule }​​ from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    MenuComponent,
    HeadlinesComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
