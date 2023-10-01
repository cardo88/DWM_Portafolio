import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
// import { GetgamesService } from '../services/getgames.service';
import { Game } from '../game-data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  // public game: any;

  constructor(
    // private httpService: GetgamesService
    ) {
      // let modalDisplay = false;
     }


  @Input() gameSelected: Game;
  // @Input() modalDisplay: string = "hidden";


  ngOnInit() {
    // this.getGamesDataById(this.gameSelected);
    // console.log(this.gameSelected.id);
    // console.log(this.modalDisplay);
  }


  ngOnChanges(changes: SimpleChanges) {
    // this.gameSelected = changes['gameSelected'].currentValue;
    // this.modalDisplay = changes['modalDisplay'].currentValue;
    console.log(this.gameSelected.id);
    // console.log(this.modalDisplay);
  }


  // public getGamesDataById(gameId: number) {
  //   this.httpService.getGamesDataById(gameId).subscribe((data: any) => {
  //     this.game = data.results
  //     console.log(gameId);
  //   });
  // }
}
