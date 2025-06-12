import { Component, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  @Input() product : Product | undefined;
  @Output() added : any | undefined;

  constructor(){

  }
  ngOnInit(): void {

  }

  addToCart(){
    this.added.emit();
  }


}
