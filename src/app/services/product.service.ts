import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url_api = "http://localhost/sbbk/public/index.php/api/products";

  constructor(private http : HttpClient) 
  { }

  getProducts(): Promise<Product[]>{
    return this.http.get<Product[]>(this.url_api).toPromise();    
  }

  getOneProduct(id_prod: number): Promise<Product>{
    return this.http.get<Product>(this.url_api + "/" + id_prod).toPromise();    
  }

}
