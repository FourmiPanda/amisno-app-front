import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../shared/model/product.model';

@Component({
  selector: 'app-viewer-products-item',
  templateUrl: './viewer-products-item.component.html',
  styleUrls: ['./viewer-products-item.component.css']
})
export class ViewerProductsItemComponent implements OnInit {
  @Input() product: Product;
  @Output() selecteProductEvent = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  showProductDetails(product: Product): void {
    this.selecteProductEvent.emit(product);
  }
}
