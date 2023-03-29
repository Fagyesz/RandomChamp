import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { RandomChampionsComponent } from './random-champions/random-champions.component';


const routes: Routes = [
  { path: '/RandomChamp/', component: HomePageComponent },
  { path: '/RandomChamp/random', component: RandomChampionsComponent },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

