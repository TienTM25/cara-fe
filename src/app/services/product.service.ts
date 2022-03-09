import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private REST_API_SERVER = "http://localhost:3000/products?_page=1&_limit=8";
  private REST_API_PRODUCT_DETAIL = "http://localhost:3000/products/";
  private API_SERVER = "http://localhost:3000/products?";

  constructor(private httpClient: HttpClient) { }

  public getNewArrivalsProduct(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public getFeaturedProduct(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public getById(id: number){
    return this.httpClient.get(this.REST_API_PRODUCT_DETAIL + id);
  }

  public getFeaturedProductDetail(){
    return this.httpClient.get("http://localhost:3000/products?_page=2&_limit=4");
  }

  public getShopProduct(pageNum: number){
    console.log(this.API_SERVER + "_page=" + pageNum + "&_limit=8");
    return this.httpClient.get(this.API_SERVER + "_page=" + pageNum + "&_limit=8")
  }
}
