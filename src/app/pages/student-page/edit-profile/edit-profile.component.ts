import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IStudentUser } from '../../../shared/_models/interfaces';
import { StudentService } from '../student.service';
import { AlertService, AuthenticationService } from '../../../shared/_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  studentUpdateForm : FormGroup;
  existingStudentDetail : IStudentUser;
  updatedStudentDetail : IStudentUser;

  constructor(
    private studentService: StudentService,
    private authService: AuthenticationService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.studentService.getStudentDetails().subscribe(
      data => {
        console.log(data);
        this.existingStudentDetail = data;

        this.studentUpdateForm = new FormGroup ({
          firstname: new FormControl(this.existingStudentDetail.firstname,[Validators.required, Validators.minLength(4)]),
          lastname: new FormControl(this.existingStudentDetail.lastname,[Validators.required, Validators.minLength(4)]),
          password: new FormControl('',[Validators.required, Validators.minLength(8)]),
          email: new FormControl(this.existingStudentDetail.email,
                  [ Validators.required, 
                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                  ])
        });
      },
      err =>{
        this.router.navigateByUrl('/student');
        this.alertService.error("Something really bad just happened.");
      }
    );
  }


  get firstname() { return this.studentUpdateForm.get('firstname'); }
  get lastname() { return this.studentUpdateForm.get('lastname'); }
  get password() { return this.studentUpdateForm.get('password'); }
  get email() { return this.studentUpdateForm.get('email'); }

  
  public onSubmit() {
    if(this.studentUpdateForm.valid){
        this.updatedStudentDetail = this.studentUpdateForm.value;
        this.studentService.updateStudentDetails(this.updatedStudentDetail)
          .subscribe(
            data => {
              this.authService.login(this.existingStudentDetail.username, this.updatedStudentDetail.password)
                .subscribe();
              this.alertService.success("Student Updated Successfully!");
            },
            /* error handling */
            err => {
              this.alertService.error("User cannot be updated, try using another username.")
            }
          );
    }
  }

}
