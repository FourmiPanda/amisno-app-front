import { Component, OnInit } from '@angular/core';

class Article {
  name: string;
  prix: number;
  count: number;
}

@Component({
  selector: 'app-viewer-cart',
  templateUrl: './viewer-cart.component.html',
  styleUrls: ['./viewer-cart.component.css']
})
export class ViewerCartComponent implements OnInit {

  constructor() { }

  cart: Article[] = [{
    name: 'Iphone 12',
    prix: 1922,
    count: 1
  }, {
    name: 'Iphone 12 mini',
    prix: 1722,
    count: 1
  }, {
    name: 'Iphone 12 Pro',
    prix: 3456,
    count: 1
  }, {
    name: 'Iphone 12 mini',
    prix: 1722,
    count: 1
  }, {
    name: 'Iphone 12 Pro',
    prix: 3456,
    count: 1
  }, {
    name: 'Iphone 12 mini',
    prix: 1722,
    count: 1
  }, {
    name: 'Iphone 12 Pro',
    prix: 3456,
    count: 1
  }, {
    name: 'Iphone 12 mini',
    prix: 1722,
    count: 1
  }, {
    name: 'Iphone 12 Pro',
    prix: 3456,
    count: 1
  }];

  totalPrice = 0;


  ngOnInit(): void {
    this.updateTotalPrice();
  }

  removeItem(index: number): void {
    this.cart.splice(index, 1);
  }

  updateQuantity(i: number, q: number): void {
    if (this.cart[i].count + q <= 0) {
      this.removeItem(i);
      this.updateTotalPrice();
      return;
    }
    this.cart[i].count += q;
    this.updateTotalPrice();
  }

  updateTotalPrice(): void {
    let price = 0;
    this.cart.forEach((i) => {
      price += i.count * i.prix;
    });
    this.totalPrice = price;
  }
}
