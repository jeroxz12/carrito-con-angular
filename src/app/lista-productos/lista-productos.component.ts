import { Component, OnInit } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  listaProductos:ProductoComponent[]=[new ProductoComponent(1,"Termo Stanley",20,"https://images.fravega.com/f1000/a38680c3d479fc2b95d4be3342790541.jpg"),
new ProductoComponent(2,"Mate Imperial",22,"https://th.bing.com/th/id/OIP.1byWSaZDLS-OlAwd3KrORgHaHa?pid=ImgDet&rs=1")
, new ProductoComponent(3,"Yerba Canarias 1KG",10,"https://th.bing.com/th/id/OIP.VGlb0Bps3dDWI6r1-T-lZwHaHa?pid=ImgDet&w=597&h=597&rs=1")];

  carrito:ProductoComponent[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  agregarAlCarrito(producto:ProductoComponent):void{
    let yaExistia = false;
    for(let item of this.carrito){
      if(item === producto){
       yaExistia = true;
      } 
    }
    if(yaExistia === false){
    this.carrito.push(producto);}
  }
  vaciarCarrito():void {
    this.carrito = [];
  }
  venderProducto(stock:number):number{
    return  stock - 1;
  }
  comprarCarrito():void{
    alert("Tu compra ha sido finalizada");
    this.carrito = [];
  }
  
}
