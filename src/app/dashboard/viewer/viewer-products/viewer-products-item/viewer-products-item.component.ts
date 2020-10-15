import {Component, Input, OnInit} from '@angular/core';

class Product {
  name: string;
  prix: number;
  img?: string;
}

@Component({
  selector: 'app-viewer-products-item',
  templateUrl: './viewer-products-item.component.html',
  styleUrls: ['./viewer-products-item.component.css']
})
export class ViewerProductsItemComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

  showProductDetails(product: Product): void {
    console.log(product);
  }
}
