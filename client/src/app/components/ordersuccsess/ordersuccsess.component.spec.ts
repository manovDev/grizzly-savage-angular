import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersuccsessComponent } from './ordersuccsess.component';

describe('OrdersuccsessComponent', () => {
  let component: OrdersuccsessComponent;
  let fixture: ComponentFixture<OrdersuccsessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersuccsessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersuccsessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
