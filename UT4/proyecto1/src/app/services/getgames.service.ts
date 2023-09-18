import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetgamesService {

  constructor(
    private http: HttpClient) { }

  public getGameData(): Observable<any> {
    return this.http.get("https://api.rawg.io/api/games?key=0f298e6465364e3192e689567cd70e24");
  }
}
//0f298e6465364e3192e689567cd70e24