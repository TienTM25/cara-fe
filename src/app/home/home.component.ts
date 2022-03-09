import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newArrivalsProduct: any = [];
  featuredProduct: any = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getNewArrivalsProduct().subscribe(data => {
      this.newArrivalsProduct = data;
    })  

    this.productService.getFeaturedProduct().subscribe(data => {
      this.featuredProduct = data;
    })
  }

  addItem(product: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const cartItem = {
      product: product,
      quantity: 1
    };

    let exist = false;
    cart = cart.map((x: { product: { id: any; }; quantity: number; }) => {
      if (x.product.id == product.id){
        x.quantity += 1;
        exist = true;
      }
      return x;
    })
    if (!exist) {
      cart.push(cartItem);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }

}
