import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanProductionComponent } from './plan-production.component';

describe('PlanProductionComponent', () => {
  let component: PlanProductionComponent;
  let fixture: ComponentFixture<PlanProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
