import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtmServicePageComponent } from './utm-service-page.component';

describe('UtmServicePageComponent', () => {
  let component: UtmServicePageComponent;
  let fixture: ComponentFixture<UtmServicePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtmServicePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtmServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
