import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCarComponent } from './mini-car.component';

describe('MiniCarComponent', () => {
  let component: MiniCarComponent;
  let fixture: ComponentFixture<MiniCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
