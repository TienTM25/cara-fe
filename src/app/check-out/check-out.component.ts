import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  userAutoFill: any[] = [];
  cartAutoFill: any[] = [];
  total: number = 0;
  cartLength: number = 0;
  checkCart: any = localStorage.getItem('cart');
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.checkCart) {
      this.autoFill();
      this.checkOutCart();
      this.calculateTotal();
    }else {
      this.router.navigateByUrl('/home');
    }
  }

  autoFill(){
    const user = JSON.parse(localStorage.getItem('user') || '[]');
    if(user){
      this.userAutoFill = user;
    }
    console.log(this.userAutoFill.length);
  }

  checkOutCart(){
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if(cart){
      this.cartAutoFill = cart;
    }
  }

  calculateTotal(){
    this.total = 0;
    this.cartLength = this.cartAutoFill.length;
    for(let item of this.cartAutoFill){
      this.total += item.quantity * item.product.price;
    }
  }

  finish(){
    localStorage.removeItem('cart');
    this.router.navigateByUrl('/home');
  }
}
