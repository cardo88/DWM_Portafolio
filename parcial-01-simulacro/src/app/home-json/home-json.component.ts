import { Component } from '@angular/core';
import { ProdDetailJsonService } from '../services/prod-detail-json.service';
import { Product } from '../product';

@Component({
  selector: 'app-home-json',
  templateUrl: './home-json.component.html',
  styleUrls: ['./home-json.component.css']
})
export class HomeJsonComponent {

  productos: Product[] = [];

  constructor(private httpService: ProdDetailJsonService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  public getProductList() {
    this.httpService.getProductList().subscribe((data: any) => {
      console.log(data);
      this.productos = data;
      
    });
  }

}
