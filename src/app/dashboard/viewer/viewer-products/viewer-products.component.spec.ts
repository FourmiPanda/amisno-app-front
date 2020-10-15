import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerProductsComponent } from './viewer-products.component';

describe('ViewerProductsComponent', () => {
  let component: ViewerProductsComponent;
  let fixture: ComponentFixture<ViewerProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewerProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
