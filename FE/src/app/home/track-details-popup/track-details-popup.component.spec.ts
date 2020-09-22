import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackDetailsPopupComponent } from './track-details-popup.component';

describe('TrackDetailsPopupComponent', () => {
  let component: TrackDetailsPopupComponent;
  let fixture: ComponentFixture<TrackDetailsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackDetailsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
