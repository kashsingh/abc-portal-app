import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from '../../../../shared/_services/index';
import { AdminService } from "../../admin.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IStudentUser } from '../../../../shared/_models/interfaces';
import { Router } from '@angular/router'; //ActivatedRoute, Params
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit, OnDestroy {

  studentUpdateForm : FormGroup;
  existingStudentDetail : IStudentUser;
  updatedStudentDetail : IStudentUser;
  studentId: number;
  private subscription: Subscription;


  constructor(
    public adminService: AdminService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.subscription = this.adminService.searchedStudent$.subscribe(
      searchedStudent => {
        this.existingStudentDetail = searchedStudent;
      }
    )

  }

  ngOnInit() {

    if(!this.existingStudentDetail){
      this.router.navigateByUrl('/admin/student');
    }
    
    this.studentUpdateForm = new FormGroup ({
      firstname: new FormControl(this.existingStudentDetail.firstname,[Validators.required, Validators.minLength(4)]),
      lastname: new FormControl(this.existingStudentDetail.lastname,[Validators.required, Validators.minLength(4)]),
      // username: new FormControl(this.existingStudentDetail.username,[Validators.required, Validators.minLength(4)]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
      email: new FormControl(this.existingStudentDetail.email,
              [ Validators.required, 
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
              ])
    })
  
  }

  get firstname() { return this.studentUpdateForm.get('firstname'); }
  get lastname() { return this.studentUpdateForm.get('lastname'); }
  // get username() { return this.studentUpdateForm.get('username'); }
  get password() { return this.studentUpdateForm.get('password'); }
  get email() { return this.studentUpdateForm.get('email'); }

  
  public onSubmit() {
    if(this.studentUpdateForm.valid){
        this.updatedStudentDetail = this.studentUpdateForm.value;
        this.adminService.updateStudent(this.updatedStudentDetail, this.existingStudentDetail.studentId)
          .subscribe(
            data => {
              this.alertService.success("Student Updated Successfully!")
            },
            /* error handling */
            err => {
              this.alertService.error("User cannot be updated, try using another username.")
            }
          );
    }
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
