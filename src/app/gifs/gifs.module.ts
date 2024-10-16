import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifsCardComponent,
    // HttpClientModule  se usaba hasta hace poco para hacer peticiones http
  ],
  imports: [
    CommonModule,
    SharedModule
  ], 
  exports:[
    HomePageComponent
  ],
  providers:[
    provideHttpClient(withInterceptorsFromDi()) //nueva forma de usar el HttpClient
  ]
})
export class GifsModule { }
