import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../../shared/model/product.model';
import {MatDrawer} from '@angular/material/sidenav';
import {CartService} from "../../../webservices/cart.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-viewer-products',
  templateUrl: './viewer-products.component.html',
  styleUrls: ['./viewer-products.component.css']
})
export class ViewerProductsComponent implements OnInit {
  @ViewChild('drawer') drawerRef: MatDrawer;

  selectedProduct: Product;

  products = [{
    name: 'Iphone 12',
    prix: 854
  }, {
    name: 'Iphone 12 Max',
    prix: 1269
  }, {
    name: 'Iphone 12 Mini',
    prix: 6487
  }, {
    name: 'Iphone 12 Pro',
    prix: 5562
  }, {
    name: 'Iphone 12 SE',
    prix: 13574
  }];

  constructor(private cartService: CartService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  selectProduct(event): void {
    this.selectedProduct = event;
    this.drawerRef.open();
  }

  addToCart(selectedProduct: Product): void {
    this.cartService.addToCart(selectedProduct, 1);
    this.snackBar.open('Add to cart !', null, {
      duration: 2000,
    });
  }
}
