import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../shared/_services';
import { ICourseSubject } from '../../../shared/_models/interfaces';
import * as _ from "lodash";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ClrDatagridStringFilterInterface} from "@clr/angular";


@Component({
  selector: 'app-enroll-semester',
  templateUrl: './enroll-semester.component.html',
  styleUrls: ['./enroll-semester.component.css']
})
export class EnrollSemesterComponent implements OnInit {

  studentEnrolledSubjects: ICourseSubject[];
  allCourseSubjects: ICourseSubject[];

  selectedSubjects: ICourseSubject[] = [];
  availableSubjectsToEnroll: ICourseSubject[] = [];
  enrollSubjectsForm: FormGroup;
  toolTipState = false;
  enrollingSemester: number;
  subjectFilter = new SubjectFilter();

  constructor(
    private studentService: StudentService,
    private alertService: AlertService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.getSubjectsData();
  }

  ngOnInit() {
    this.studentService.getStudentDetails().subscribe(
      data => {
        this.enrollingSemester = data.currentSemester+1;
      }
    );
  }

  getStudentEnrolledSubjects(){
    this.studentService.getStudentEnrolledSubjects().subscribe(
      data => {
        this.studentEnrolledSubjects = data;
        this.availableSubjectsToEnroll = _.differenceBy(this.allCourseSubjects, this.studentEnrolledSubjects, 'id');
      }, err => {
        let notEnrolledMessage = "Student hasn't enrolled yet for the semester.";
        if(err.error.message == notEnrolledMessage){
          this.studentEnrolledSubjects = [];
          this.availableSubjectsToEnroll = this.allCourseSubjects;
        } else {
          this.router.navigateByUrl('/student');
          this.alertService.error("Error fetching enrolled subjects data for the student.");
        }
      }
    );
  }

  getSubjectsData(){
    this.studentService.getAllCourseSubjects().subscribe(
        data => {
          this.allCourseSubjects = data;
          this.getStudentEnrolledSubjects();
        }, err => {
          this.alertService.error("Error fetching available subjects data for the student.")
        }
    );
  }

  enrollSubjects(){
    if(this.enrollingSemester<9){   
      if(this.selectedSubjects.length > 3 && this.selectedSubjects.length < 7){
        this.studentService.enrollSemester(this.selectedSubjects)
          .subscribe(
            data =>{
              this.router.navigateByUrl('/student');
              this.alertService.success('You have been enrolled successfully.');
            }
          );
      } else {
        this.toolTipState = true;
        this.alertService.error('Please check the tooltip and enroll within specified limit of subjects.');
      }
    } else{
      this.alertService.error("You have already enrolled for eight semesters.");
    }
  }
}

class SubjectFilter implements ClrDatagridStringFilterInterface<ICourseSubject> {
  accepts(subject: ICourseSubject, search: string):boolean {
      return subject.subject_name.toLowerCase().indexOf(search) >= 0;
  }
}
