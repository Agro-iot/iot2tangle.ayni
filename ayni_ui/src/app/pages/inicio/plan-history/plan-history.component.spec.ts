import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanHistoryComponent } from './plan-history.component';

describe('PlanHistoryComponent', () => {
  let component: PlanHistoryComponent;
  let fixture: ComponentFixture<PlanHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
