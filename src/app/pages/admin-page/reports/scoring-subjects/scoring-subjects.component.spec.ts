import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringSubjectsComponent } from './scoring-subjects.component';

describe('ScoringSubjectsComponent', () => {
  let component: ScoringSubjectsComponent;
  let fixture: ComponentFixture<ScoringSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoringSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoringSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
