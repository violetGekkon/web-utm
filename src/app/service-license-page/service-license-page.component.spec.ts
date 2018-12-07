import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLicensePageComponent } from './service-license-page.component';

describe('ServiceLicensePageComponent', () => {
  let component: ServiceLicensePageComponent;
  let fixture: ComponentFixture<ServiceLicensePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLicensePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLicensePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
