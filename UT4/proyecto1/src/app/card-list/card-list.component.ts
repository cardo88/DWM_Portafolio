import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
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
  public modalDisplay: boolean;
  public gameId: number;
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
    } else {
      this.httpService.getGameData().subscribe((data: any) => {
        this.games = data.results
      });
    }
  }
  @Input() platformSelected: number = 999999999;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['platformSelected']) {
      this.getGamesData(this.platformSelected);
    }
  }

  showModal(gameId:number){
    this.gameId = gameId;
    this.modalDisplay = true;
  }

}
