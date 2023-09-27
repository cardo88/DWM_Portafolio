import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GetgamesService } from '../services/getgames.service';
import { Game } from '../game-data';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, OnChanges {

  public games: Game[] = [];
  constructor(
    private httpService: GetgamesService,
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getGamesData();
  }

  //en caso de elegir una plataforma:
  @Input() platformSelected: number; //= 999999999;
  //en caso de elegir una plataforma:
  ngOnChanges(changes: SimpleChanges) {
    if (changes['platformSelected']) {
      this.getGamesData(this.platformSelected);
    }
  }

  public getGamesData(platformId?: number) {
    if (platformId !== undefined) {
      this.httpService.getGameDataByPlatform(platformId).subscribe((data: any) => {
        this.games = data.results;
      });
    } else {
      this.httpService.getGameData().subscribe((data: any) => {
        this.games = data.results
      });
    }
  }


 openModal(gameId:number) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.gameIdSelected = gameId;
    console.log(gameId);
  }


}
