import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStudentComponent } from './top-student.component';

describe('TopStudentComponent', () => {
  let component: TopStudentComponent;
  let fixture: ComponentFixture<TopStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
