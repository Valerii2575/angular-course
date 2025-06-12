import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SortPipe } from 'src/app/pipes/sort.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title: string = 'Product List';
  selectedProduct: Product | undefined;

  products: Product[] = [
    {id: 1, title: 'Keyboard', price: 100, categories: {1: 'Computing', 2: 'Peripheries'}},
    {id: 2, title: 'Microphone', price: 79, categories: {3: 'Multimedia'}},
    {id: 3, title: 'Web Camera', price: 500, categories: {4: 'Ethertaiment'} }
  ];

  onAdded(){
    alert(`${this.selectedProduct?.title} added to cart!`);
  }
}
