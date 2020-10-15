import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerCartComponent } from './viewer-cart.component';

describe('ViewerCartComponent', () => {
  let component: ViewerCartComponent;
  let fixture: ComponentFixture<ViewerCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewerCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
