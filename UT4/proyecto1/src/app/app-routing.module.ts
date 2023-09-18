import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { CardComponent } from './card/card.component';
// import { FinderComponent } from './finder/finder.component';
// import { FooterComponent } from './footer/footer.component';
// import { HeaderComponent } from './header/header.component';
// import { ModalComponent } from './modal/modal.component';
// import { NavigatorComponent } from './navigator/navigator.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
  // { path: 'card', component: CardComponent },
  // { path: 'finder', component: FinderComponent },
  // { path: 'header', component: HeaderComponent },
  // { path: 'footer', component: FooterComponent },
  // { path: 'modal', component: ModalComponent },
  // { path: 'navigator', component: NavigatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
