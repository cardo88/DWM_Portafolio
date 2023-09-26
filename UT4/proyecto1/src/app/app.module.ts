import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { FinderComponent } from './finder/finder.component';
import { HomeComponent } from './home/home.component';
import { GetgamesService } from './services/getgames.service';
import { CardListComponent } from './card-list/card-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigatorComponent,
    FinderComponent,
    HomeComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetgamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
