import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { RandomChampionsComponent } from './random-champions/random-champions.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponentComponent,
    RandomChampionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
