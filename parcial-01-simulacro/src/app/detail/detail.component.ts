import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProdDetailService } from '../services/prod-detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(private route: ActivatedRoute, private servicio: ProdDetailService) { }

  producto : Product = {
    id: -1,
    nombre: "",
    precio: 0,
    stock: 0,
    imagen: ""
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.servicio.getDetails(id);
    console.log(id);
  };
}
