import {Injectable} from '@angular/core';
import {Item} from '../shared/model/item.model';
import {Subject} from 'rxjs';
import {PhoneModel, Status} from '../shared/model/phone.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Item[] = [
    {
      product: {
        id: 1,
        name: 'Iphone 12',
        price: 1922,
        status: Status.AVAILABLE,
      },
      quantity: 1
    }, {
      product: {
        id: 2,
        name: 'Iphone 12 mini',
        price: 1722,
        status: Status.AVAILABLE,
      },
      quantity: 1
    }, {
      product: {
        id: 3,
        name: 'Iphone 12 Pro',
        price: 3456,
        status: Status.AVAILABLE,
      },
      quantity: 1
    }, {
      product: {
        id: 4,
        name: 'Iphone 12 mini',
        price: 1722,
        status: Status.AVAILABLE,
      },
      quantity: 1
    }, {
      product: {
        id: 5,
        name: 'Iphone 12 Pro',
        price: 3456,
        status: Status.AVAILABLE,
      },
      quantity: 1
    }, {
      product: {
        id: 6,
        name: 'Iphone 12 mini',
        price: 1722,
        status: Status.AVAILABLE,
      },
      quantity: 1
    }, {
      product: {
        id: 7,
        name: 'Iphone 12 Pro',
        price: 3456,
        status: Status.AVAILABLE,
      },
      quantity: 1
    }, {
      product: {
        id: 8,
        name: 'Iphone 12 mini',
        price: 1722,
        status: Status.AVAILABLE,
      },
      quantity: 1
    }, {
      product: {
        id: 9,
        name: 'Iphone 12 Pro',
        price: 3456,
        status: Status.AVAILABLE,
      },
      quantity: 1
    }
  ];

  private cartUpdatedSubject = new Subject<any>();

  getCart(): Item[] {
    return this.cart;
  }

  constructor() { }

  addToCart(p: PhoneModel, q: number): void {
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
      total += i.quantity * i.product.price;
    });
    return total;
  }

}
