import { Component, OnInit } from '@angular/core';
import { ICourseSubject } from '../../../../shared/_models/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { AlertService } from '../../../../shared/_services/index';

@Component({
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css']
})
export class SubjectCreateComponent implements OnInit {

  courseList : string[];
  subjectAdditionForm : FormGroup;
  courseSubject : ICourseSubject;

  constructor(
    public adminService: AdminService,
    private alertService: AlertService) { }

  ngOnInit() {
    // !!! Need an API to get courseList !!!
    this.courseList = [
      "MEC",
      "CSE",
      "ECE"
    ];

    this.subjectAdditionForm = new FormGroup ({
      subject_name: new FormControl('',[Validators.required, Validators.minLength(4)]),
      course: new FormControl('',Validators.required),
    })
  }

  get subject_name() { return this.subjectAdditionForm.get('subject_name'); }
  get course() { return this.subjectAdditionForm.get('course'); }

  public onSubmit() {
    if(this.subjectAdditionForm.valid){
        this.courseSubject = this.subjectAdditionForm.value;
        this.adminService.createSubject(this.courseSubject)
          .subscribe(
            data => {
              this.alertService.success("Subject Created Successfully!")
            },
            /* error handling */
            err => {
              this.alertService.error("Something really bad just happened.")
            }
          );
    }
  }

}
