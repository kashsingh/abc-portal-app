import { Component, OnInit } from '@angular/core';
import { AdminService } from "../../admin.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IStudentUser } from "../../../../shared/_models/interfaces";
import { AlertService } from '../../../../shared/_services/index';

@Component({
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit{

  courseList : string[];
  batchList : string[];
  studentSignupForm : FormGroup;
  studentUser : IStudentUser;

  constructor(
    public adminService: AdminService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.courseList = [
      // "Mechanical Engineering", 
      // "Computer Science Engineering", 
      // "Electronics and Comm. Engineering"
      "MEC",
      "CSE",
      "ECE"
    ];

    this.batchList = ["2017", "2018", "2019"];

    this.studentSignupForm = new FormGroup ({
      firstname: new FormControl('',[Validators.required, Validators.minLength(4)]),
      lastname: new FormControl('',[Validators.required, Validators.minLength(4)]),
      username: new FormControl('',[Validators.required, Validators.minLength(4)]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
      course: new FormControl('',Validators.required),
      batch: new FormControl('',Validators.required),
      email: new FormControl('',
              [ Validators.required, 
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
              ])
    })
  }

  get firstname() { return this.studentSignupForm.get('firstname'); }
  get lastname() { return this.studentSignupForm.get('lastname'); }
  get username() { return this.studentSignupForm.get('username'); }
  get password() { return this.studentSignupForm.get('password'); }
  get course() { return this.studentSignupForm.get('course'); }
  get batch() { return this.studentSignupForm.get('username'); }
  get email() { return this.studentSignupForm.get('email'); }

  public onSubmit() {
    if(this.studentSignupForm.valid){
        this.studentUser = this.studentSignupForm.value;
        this.adminService.createStudent(this.studentUser)
          .subscribe(
            data => {
              this.alertService.success("Student Created Successfully!")
            },
            /* error handling */
            err => {
              this.alertService.error("User cannot be created, try using another username.")
            }
          );
    }
  }

}