import { Injectable } from '@angular/core';
import {Product} from '../shared/model/product.model';
import {Item} from '../shared/model/item.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Item[] = [
    {
      product: {
        name: 'Iphone 12',
        prix: 1922,
      },
      quantity: 1
    }, {
      product: {
        name: 'Iphone 12 mini',
        prix: 1722
      },
      quantity: 1
    }, {
      product: {
        name: 'Iphone 12 Pro',
        prix: 3456
      },
      quantity: 1
    }, {
      product: {
        name: 'Iphone 12 mini',
        prix: 1722
      },
      quantity: 1
    }, {
      product: {
        name: 'Iphone 12 Pro',
        prix: 3456
      },
      quantity: 1
    }, {
      product: {
        name: 'Iphone 12 mini',
        prix: 1722
      },
      quantity: 1
    }, {
      product: {
        name: 'Iphone 12 Pro',
        prix: 3456
      },
      quantity: 1
    }, {
      product: {
        name: 'Iphone 12 mini',
        prix: 1722
      },
      quantity: 1
    }, {
      product: {
        name: 'Iphone 12 Pro',
        prix: 3456
      },
      quantity: 1
    }
  ];

  private cartUpdatedSubject = new Subject<any>();

  getCart(): Item[] {
    return this.cart;
  }

  constructor() { }

  addToCart(p: Product, q: number): void {
    const index = this.cart.findIndex(i => i.product.name === p.name);
    if (index !== -1) {
      return this.updateQuantity(index, q);
    }
    this.cart.push({
      product: p,
      quantity: q
    });
    this.cartUpdatedSubject.next();
  }

  removeItem(index: number): void {
    this.cart.splice(index, 1);
    this.cartUpdatedSubject.next();
  }

  updateQuantity(index: number, q: number): void {
    if (!this.cart[index]) {
      return;
    }
    this.cart[index].quantity += q;
    this.cartUpdatedSubject.next();
  }

  clearCart(): void {
    this.cart = [];
    this.cartUpdatedSubject.next();
  }

  getCartUpdatedSubject(): Subject<any> {
    return this.cartUpdatedSubject;
  }

  getTotal(): number {
    let total = 0;
    this.cart.forEach((i) => {
      total += i.quantity * i.product.prix;
    });
    return total;
  }

}
