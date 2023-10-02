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
      console.log(platformId + " getGamesByPlatform");
    } else if (platformId == 888888888888) {
      this.httpService.getGamesDataByName(this.nameSelected).subscribe((data: any) => {
        this.games = data.results
      });
    } else {
      this.httpService.getGameData().subscribe((data: any) => {
        this.games = data.results
      });
    }
  }

  @Input() platformSelected: number = 999999999;
  // platformSelected == 888888888888 => search by name!
  @Input() nameSelected: string = "worms";

  ngOnChanges(changes: SimpleChanges) {
    if (changes['platformSelected']) {
      this.getGamesData(this.platformSelected);
      console.log(this.platformSelected);
    } else if (changes['gameNameSearched']) {
      this.getGamesData(888888888888); //aca hice chanchada!!
      console.log(this.nameSelected);
    }
  }

  // showModal(game:Game){
  //   this.gameSelected = game;
  //   this.modalDisplay = "visible";
  //   console.log(this.gameSelected.id);
  //   console.log(this.modalDisplay);
  // }

  // showModal(game: any) {
  //   this.gameSelected = game;
  //   console.log(this.gameSelected.id);
  // }

  // closeGame(){
  //   // this.selectedGame = null;
  // }


  @Output() callGameDetail = new EventEmitter<Game>();
  showModal(gameSelected: Game) {
    this.callGameDetail.emit(gameSelected);
    console.log(gameSelected.id);
  }

}
