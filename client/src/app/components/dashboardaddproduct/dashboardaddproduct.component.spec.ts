import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardaddproductComponent } from './dashboardaddproduct.component';

describe('DashboardaddproductComponent', () => {
  let component: DashboardaddproductComponent;
  let fixture: ComponentFixture<DashboardaddproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardaddproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardaddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
