import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer-products',
  templateUrl: './viewer-products.component.html',
  styleUrls: ['./viewer-products.component.css']
})
export class ViewerProductsComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
