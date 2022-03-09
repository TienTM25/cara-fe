import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shopProducts: any = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productPagination(1);
  }

  public productPagination(pageNum: number){
    this.productService.getShopProduct(pageNum).subscribe(product => {
      console.log(product);
      this.shopProducts = product;
      console.log(this.shopProducts);
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
