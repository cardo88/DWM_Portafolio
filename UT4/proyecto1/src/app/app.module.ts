import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { FinderComponent } from './finder/finder.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { GetgamesService } from './services/getgames.service';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailComponent } from './card-detail/card-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    NavigatorComponent,
    FinderComponent,
    CardComponent,
    HomeComponent,
    CardListComponent,
    CardDetailComponent
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
