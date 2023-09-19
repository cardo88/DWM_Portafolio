import { Component, Input, OnInit } from '@angular/core';
import {Game} from '../game-data';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @Input() gameData: Game;
  ngOnInit(): void {
    //console.log(this.gameData);
  }
}
