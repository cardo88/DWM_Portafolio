import { Injectable } from '@angular/core';
import { PRODUCTS } from '../product-list';
import { Observable, of } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProdDetailService {

  constructor() { }

  getDetails(id:number): Product {
    
    return PRODUCTS.filter(p => p.id === id)[0];
  }
}

