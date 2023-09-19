import { Component, Input, OnInit } from '@angular/core';
import { GetgamesService } from '../services/getgames.service';
import {Game} from '../game-data';
 
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() gameData: Game;
  ngOnInit(): void {
    //console.log(this.gameData);
  }
}