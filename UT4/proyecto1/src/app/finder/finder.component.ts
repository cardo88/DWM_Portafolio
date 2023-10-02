import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent {

  @Output() gameNameSearched = new EventEmitter<string>();

  searchThis(value:string){
    this.gameNameSearched.emit(value);
    console.log(value);
  }
}
