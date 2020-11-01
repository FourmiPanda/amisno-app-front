import { Component, OnInit } from '@angular/core';
import {Item} from '../../../shared/model/item.model';
import {CartService} from '../../../webservices/cart.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-viewer-cart',
  templateUrl: './viewer-cart.component.html',
  styleUrls: ['./viewer-cart.component.css']
})
export class ViewerCartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  cart: Item[];

  cartUpdatedSubject: Subject<any>;

  totalPrice = 0;


  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotal();
    this.cartUpdatedSubject = this.cartService.getCartUpdatedSubject();
    this.cartUpdatedSubject.subscribe(() => {
      this.totalPrice = this.cartService.getTotal();
    });
  }

  removeItem(index: number): void {
    this.cartService.removeItem(index);
  }

  updateQuantity(i: number, q: number): void {
    this.cartService.updateQuantity(i, q);
  }


}
