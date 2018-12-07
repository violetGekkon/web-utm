import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeHistoryPageComponent } from './change-history-page.component';

describe('ChangeHistoryPageComponent', () => {
  let component: ChangeHistoryPageComponent;
  let fixture: ComponentFixture<ChangeHistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeHistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
