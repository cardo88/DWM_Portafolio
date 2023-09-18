import { Component, Input, OnInit } from '@angular/core';
import { GetgamesService } from '../services/getgames.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
// export class CardComponent implements OnInit {
//   public games:any;
//   constructor(
//     private httpService: GetgamesService) {}

//   ngOnInit(): void {
//     this.getGamesData();
//   }

//   public getGamesData() {
//     this.httpService.getGameData().subscribe((data:any) => {
//       this.games = data.results;
//     });
//   }
// }

export class CardComponent implements OnInit {
  @Input() gameData: any;
  ngOnInit(): void {
  }
}