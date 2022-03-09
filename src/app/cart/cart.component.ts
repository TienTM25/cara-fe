import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  total: number = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(){
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.calculateTotal();
  }

  updateCart(){
    this.calculateTotal();
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  deleteItem(index: number){
    this.cart.splice(index, 1);
    this.calculateTotal();
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  calculateTotal(){
    this.total = 0;
    for(let item of this.cart){
      this.total += item.quantity * item.product.price;
    }
  }

  checkOutPage(){
    this.router.navigateByUrl('/check-out');
  }
}
