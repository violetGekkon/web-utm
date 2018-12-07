import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtmDocumentPageComponent } from './utm-document-page.component';

describe('UtmDocumentPageComponent', () => {
  let component: UtmDocumentPageComponent;
  let fixture: ComponentFixture<UtmDocumentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtmDocumentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtmDocumentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
