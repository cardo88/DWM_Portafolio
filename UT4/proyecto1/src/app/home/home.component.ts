import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Game } from '../game-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  
  @Input() platformSelected: number;
  @Input() nameSelected: string;
  gameSelected : any;
  
  callGameSelected(game:Game) {
    this.gameSelected = game;
    //console.log(game.id);
  }
  
  closeGame(){
    this.gameSelected = null;
  }

}
