import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadlinesComponent } from "./pages/headlines/headlines.component"
import { NewsComponent } from "./pages/news/news.component"
import { Page404Component } from "./pages/page404/page404.component"

const routes: Routes = [
  {path:"",redirectTo:"news", pathMatch:"full"},
  {path:"headlines",component:HeadlinesComponent},
  {path:"news",component:NewsComponent},
  {path:"**",component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
