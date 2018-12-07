import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateInfoPageComponent } from './certificate-info-page.component';

describe('CertificateInfoPageComponent', () => {
  let component: CertificateInfoPageComponent;
  let fixture: ComponentFixture<CertificateInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
