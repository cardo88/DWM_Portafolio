import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  platformIdSelected: number = 0;
  gameByPlatform(platformId:number) {
    this.platformIdSelected = platformId;
    //console.log(this.platformIdSelected);
  }

  nameSelected: string = "";
  gameByName(value:string) {
    this.nameSelected = value;
    console.log(value);
  }

}