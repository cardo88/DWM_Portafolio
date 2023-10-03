import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { GetgamesService } from '../services/getgames.service';
import { Game } from '../game-data';
//import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, OnChanges {
  starRating = 0;

  public games: Game[] = [];
  // public modalDisplay: string = "hidden";
  // public gameSelected: Game;
  constructor(
    private httpService: GetgamesService) { }

  ngOnInit(): void {
    this.getGamesData();
  }

  public getGamesData(platformId?: number) {
    if (platformId !== undefined) {
      this.httpService.getGameDataByPlatform(platformId).subscribe((data: any) => {
        this.games = data.results;
      });
      //console.log(platformId + " getGamesByPlatform");
    // } else if (platformId == -1) {
    //   this.httpService.getGameData().subscribe((data: any) => {
    //     this.games = data.results
    //     console.log(this.nameSelected);
    //   });
    } else {
      this.httpService.getGameData().subscribe((data: any) => {
        this.games = data.results
      });
    }
  }

  @Input() platformSelected: number = -1;
  // platformSelected == 888888888888 => search by name!
  @Input() nameSelected: string = "";
  //public emtpyName = "";

  ngOnChanges(changes: SimpleChanges) {
    // if (changes['nameSelected']) {
    //   if (this.nameSelected != "") {
    //     this.getGamesData(-1);
    //   }
    //   console.log(this.nameSelected);
    // } else {
    //   this.nameSelected = "";
    // }
    if (changes['platformSelected']) {
      this.getGamesData(this.platformSelected);
      //console.log(this.platformSelected);
    } 
  }


  @Output() callGameDetail = new EventEmitter<Game>();
  showModal(gameSelected: Game) {
    this.callGameDetail.emit(gameSelected);
    console.log(gameSelected.id);
  }

  containsSubstring(name: string) {
    console.log(this.nameSelected);
    return name.toLowerCase().indexOf(this.nameSelected.toLowerCase()) !== -1;
  }

  checkSearchEmpty(){
    console.log(this.nameSelected);
    return this.nameSelected == "";
  }

}
