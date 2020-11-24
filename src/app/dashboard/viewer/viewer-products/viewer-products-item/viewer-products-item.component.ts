import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhoneModel} from '../../../../shared/model/phone.model';

@Component({
  selector: 'app-viewer-products-item',
  templateUrl: './viewer-products-item.component.html',
  styleUrls: ['./viewer-products-item.component.css']
})
export class ViewerProductsItemComponent implements OnInit {
  @Input() product: PhoneModel;
  @Output() selecteProductEvent = new EventEmitter<PhoneModel>();

  constructor() {
  }

  ngOnInit(): void {
    if (!this.product.img) {
      this.product.img = '/assets/no_image.png';
    }
  }

  showProductDetails(product: PhoneModel): void {
    this.selecteProductEvent.emit(product);
  }
}
