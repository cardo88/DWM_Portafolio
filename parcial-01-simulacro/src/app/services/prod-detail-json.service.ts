import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProdDetailJsonService {

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:3000/products"

  public getProductList(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  public getDetails(id:number) {
    return this.http.get(`${this.apiUrl}/productos/${id}`);
  }

}
