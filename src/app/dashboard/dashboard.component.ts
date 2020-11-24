import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ViewerCartComponent} from './viewer/viewer-cart/viewer-cart.component';
import { ProductsService } from '../webservices/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog, public productsService: ProductsService) {
  }

  ngOnInit(): void {
  }

  openCart(): void {
    const dialogRef = this.dialog.open(ViewerCartComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
