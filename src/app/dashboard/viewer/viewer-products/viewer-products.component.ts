import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {CartService} from '../../../webservices/cart.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductsService} from '../../../webservices/products.service';
import {PhoneModel} from '../../../shared/model/phone.model';

@Component({
  selector: 'app-viewer-products',
  templateUrl: './viewer-products.component.html',
  styleUrls: ['./viewer-products.component.css']
})
export class ViewerProductsComponent implements OnInit {
  @ViewChild('drawer') drawerRef: MatDrawer;

  selectedProduct: PhoneModel;
  products: PhoneModel[] = [];

  constructor(private cartService: CartService, public snackBar: MatSnackBar, private productS: ProductsService) {
  }

  ngOnInit(): void {
    this.productS.getPhones().subscribe((res: PhoneModel[]) => this.setProducts(res));
  }

  getProducts = () => this.products;
  setProducts = (products: PhoneModel[]) => this.products = products;

  selectProduct(event): void {
    this.selectedProduct = event;
    this.drawerRef.open();
  }

  addToCart(selectedProduct: PhoneModel): void {
    this.cartService.addToCart(selectedProduct, 1);
    this.snackBar.open('Add to cart !', null, {
      duration: 2000,
    });
  }
}
