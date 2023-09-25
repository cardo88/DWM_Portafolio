import { Component,OnInit } from '@angular/core';
import { GetgamesService } from '../services/getgames.service';
import {Game} from '../game-data';
//import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  starRating = 0;
  public games:Game[]=[];
  constructor(
    private httpService: GetgamesService) {}

  ngOnInit(): void {
    this.getGamesData();
  }

  public getGamesData() {
    this.httpService.getGameData().subscribe((data:any) => {
      this.games = data.results;
      
    });
  }
}
