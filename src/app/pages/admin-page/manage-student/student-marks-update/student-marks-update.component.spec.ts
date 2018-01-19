import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMarksUpdateComponent } from './student-marks-update.component';

describe('StudentMarksUpdateComponent', () => {
  let component: StudentMarksUpdateComponent;
  let fixture: ComponentFixture<StudentMarksUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMarksUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMarksUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
