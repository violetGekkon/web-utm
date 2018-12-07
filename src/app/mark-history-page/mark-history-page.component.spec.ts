import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkHistoryPageComponent } from './mark-history-page.component';

describe('MarkHistoryPageComponent', () => {
  let component: MarkHistoryPageComponent;
  let fixture: ComponentFixture<MarkHistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkHistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
