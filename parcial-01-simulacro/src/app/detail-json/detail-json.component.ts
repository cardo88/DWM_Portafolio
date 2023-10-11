import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProdDetailJsonService } from '../services/prod-detail-json.service';

@Component({
  selector: 'app-detail-json',
  templateUrl: './detail-json.component.html',
  styleUrls: ['./detail-json.component.css']
})
export class DetailJsonComponent {
  constructor(private route: ActivatedRoute, private servicio: ProdDetailJsonService) { }

  producto : Product = {
    id: -1,
    nombre: "",
    precio: 0,
    stock: 0,
    imagen: ""
  }
  // ngOnInit() {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.producto = this.servicio.getDetails(id);
  //   console.log(id);
  // };


  ngOnInit(): void {
    this.getProductDetail();
  }

  public getProductDetail() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.getDetails(id).subscribe((data: any) => {
      this.producto = data;
    });
  }

}
