import { Component, OnInit } from '@angular/core';
import { GetgamesService } from '../services/getgames.service';
import { GamePlatformDetail } from '../game-platform-detail';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  platformSelected = 0;
  public platforms: GamePlatformDetail[] = [];
  constructor(
    private httpService: GetgamesService) { }

  ngOnInit(): void {
    this.getPlatforms();
  }

  public getPlatforms() {
    this.httpService.getPlatforms().subscribe((data: any) => {
      this.platforms = data.results;
    });
  }

  @Output() callGameByPlatform = new EventEmitter<number>();
  gameByPlatform(platformId:number) {
    this.callGameByPlatform.emit(platformId);
    //console.log(platformId);
  }


  @Output() gameNameSearched = new EventEmitter<string>();
  searchThis(value: string) {
    this.gameNameSearched.emit(value);
  }
  
}