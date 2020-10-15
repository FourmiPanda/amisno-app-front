import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerProductsItemComponent } from './viewer-products-item.component';

describe('ViewerProductsItemComponent', () => {
  let component: ViewerProductsItemComponent;
  let fixture: ComponentFixture<ViewerProductsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewerProductsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerProductsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
