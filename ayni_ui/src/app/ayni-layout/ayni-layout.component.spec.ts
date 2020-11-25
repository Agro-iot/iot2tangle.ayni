import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyniLayoutComponent } from './ayni-layout.component';

describe('AyniLayoutComponent', () => {
  let component: AyniLayoutComponent;
  let fixture: ComponentFixture<AyniLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyniLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyniLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
