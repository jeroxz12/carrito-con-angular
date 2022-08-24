import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  id:Number;
  descripcion:String;
  stock:Number;
  imagen:String;
  constructor(id:Number, descripcion:String, stock:Number, imagen:String) { 
    this.id=id;
    this.descripcion=descripcion;
    this.stock=stock
    this.imagen=imagen;
  }

  ngOnInit(): void {
  }

 
}
