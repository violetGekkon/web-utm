import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDeclarationPageComponent } from './service-declaration-page.component';

describe('ServiceDeclarationPageComponent', () => {
  let component: ServiceDeclarationPageComponent;
  let fixture: ComponentFixture<ServiceDeclarationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDeclarationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDeclarationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
