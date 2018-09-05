import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalComComponent } from './carousal-com.component';

describe('CarousalComComponent', () => {
  let component: CarousalComComponent;
  let fixture: ComponentFixture<CarousalComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousalComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
