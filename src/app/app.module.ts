import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ViewerProductsComponent } from './dashboard/viewer/viewer-products/viewer-products.component';
import { ViewerComponent } from './dashboard/viewer/viewer.component';
import { ViewerCartComponent } from './dashboard/viewer/viewer-cart/viewer-cart.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from "@angular/material/list";
import { ViewerProductsItemComponent } from './dashboard/viewer/viewer-products/viewer-products-item/viewer-products-item.component';
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewerProductsComponent,
    ViewerComponent,
    ViewerCartComponent,
    ViewerProductsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
