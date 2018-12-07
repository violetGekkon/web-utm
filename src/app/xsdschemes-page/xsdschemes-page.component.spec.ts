import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XSDSchemesPageComponent } from './xsdschemes-page.component';

describe('XSDSchemesPageComponent', () => {
  let component: XSDSchemesPageComponent;
  let fixture: ComponentFixture<XSDSchemesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XSDSchemesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XSDSchemesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
