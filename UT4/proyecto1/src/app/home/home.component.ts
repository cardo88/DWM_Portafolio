import { Component,OnInit } from '@angular/core';
import { GetgamesService } from '../services/getgames.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public games:any;
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
