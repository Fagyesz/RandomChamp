import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { RandomChampionsComponent } from './random-champions/random-champions.component';


const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'RandomChamp', component: RandomChampionsComponent, pathMatch: 'full' },
  { path: 'RandomChamp/random', component: RandomChampionsComponent, pathMatch: 'full' },
  { path: 'random', component: RandomChampionsComponent , pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

