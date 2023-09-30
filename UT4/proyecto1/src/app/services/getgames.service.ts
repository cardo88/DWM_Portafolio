import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetgamesService {

  key = "0f298e6465364e3192e689567cd70e24"
  constructor(
    private http: HttpClient) { }

  public getGameData(): Observable<any> {
    return this.http.get("https://api.rawg.io/api/games?key="+this.key);
  }
  public getPlatforms(): Observable<any> {
    return this.http.get("https://api.rawg.io/api/platforms?key="+this.key);
  }
  public getGameDataByPlatform(platformId:number): Observable<any> {
    return this.http.get("https://api.rawg.io/api/games?key="+this.key+"&platforms="+platformId);
  }
  public getGamesDataById(id:number): Observable<any> {
    return this.http.get("https://api.rawg.io/api/games?key="+this.key+"&id="+id);
  }
}