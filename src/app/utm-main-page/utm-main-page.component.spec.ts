import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtmMainPageComponent } from './utm-main-page.component';

describe('UtmMainPageComponent', () => {
  let component: UtmMainPageComponent;
  let fixture: ComponentFixture<UtmMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtmMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtmMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
