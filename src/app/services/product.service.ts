import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import products from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  shoppingCart: IProduct[] = [];
  products: IProduct[];
  constructor() { 
    this.products = products;
  }

  getProducts(): IProduct[]{
    return this.products;
  }

  getShoppingCart(): IProduct[]{
    return this.shoppingCart;
  }

  addToCart(product: IProduct): void{
    this.shoppingCart.push(product);
  }
}
