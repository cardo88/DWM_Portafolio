import { Component,OnInit } from '@angular/core';
import { GetgamesService } from '../services/getgames.service';
import {Game} from '../game-data';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
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
