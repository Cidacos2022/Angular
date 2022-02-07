import { Component, OnInit } from '@angular/core';
import { Product } from '../app-routing-module/model/productos';

@Component({
  selector: 'app-hello-world-for',
  templateUrl: './hello-world-for.component.html',
  styleUrls: ['./hello-world-for.component.css'],
})
export class HelloWorldForComponent implements OnInit {
  productos: Product[] = [
    {
      productID: 123,
      name: 'nombre',
      price: 14,
    },
    {
      productID: 123123,
      name: 'producto2',
      price: 1124,
    },
    {
      productID: 433,
      name: 'Producto3',
      price: 213123,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
