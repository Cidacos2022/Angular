import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../app-routing-module/model/productos';
import { PRODUCTOS } from '../app-routing-module/utils/constProductos';

@Component({
  selector: 'app-hello-world-data-from-url',
  templateUrl: './hello-world-data-from-url.component.html',
  styleUrls: ['./hello-world-data-from-url.component.css'],
})
export class HelloWorldDataFromUrlComponent implements OnInit {
  producto: Product | null;
  idProducto = 0;
  constructor(private activatedRoute: ActivatedRoute) {
    this.producto = null;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => {
      this.idProducto = parameters.get('idProducto');
    });

    this.producto = PRODUCTOS.filter(
      (x: Product) => x.productID == this.idProducto
    )[0];
  }
}
