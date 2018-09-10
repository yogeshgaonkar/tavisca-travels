import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAdvacndedSearchComponent } from './mobile-advacnded-search.component';

describe('MobileAdvacndedSearchComponent', () => {
  let component: MobileAdvacndedSearchComponent;
  let fixture: ComponentFixture<MobileAdvacndedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAdvacndedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAdvacndedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
