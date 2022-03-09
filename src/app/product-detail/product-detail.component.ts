import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  proDetail: any;
  featuredProduct: any = [];
  
  constructor(private productService: ProductService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.productService.getById(id).subscribe(data => {
      this.proDetail = data;
      console.log(this.proDetail);
    });

    this.productService.getFeaturedProductDetail().subscribe(data => {
      this.featuredProduct = data;
    })
  }

}
