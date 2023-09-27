import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GetgamesService } from '../services/getgames.service';
import { Game } from '../game-data';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public game: Game;

  constructor(
    private httpService: GetgamesService,
    public activeModal: NgbActiveModal
  ) { }


  @Input() gameIdSelected: number = 1;


  ngOnInit() {
    this.getGamesDataById(this.gameIdSelected);
    console.log(this.gameIdSelected);
  }

  public getGamesDataById(gameId: number) {
    this.httpService.getGamesDataById(gameId).subscribe((data: any) => {
      this.game = data.results
      console.log(gameId);
    });
  }
}