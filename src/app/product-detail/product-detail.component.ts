import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input()product: IProduct;

  @Output()productAdded: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  constructor() { }

  ngOnInit() {
  }

  addToCart(): void{
    this.productAdded.emit(this.product);
  }

}
