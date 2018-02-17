import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';
import { IStudentUser } from '../../../../shared/_models/interfaces';
import { Subscription } from 'rxjs/Subscription';
import { AlertService } from '../../../../shared/_services/index';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  studentUser: IStudentUser;
  private subscription: Subscription;
  studentDeleteModal:boolean = false;
  selectSemesterModal:boolean = false;
  studentEnrolledOnce:boolean = false;
  enrolledSemList = [];
  semesterSelectForm : FormGroup;

  constructor( public adminService: AdminService,
               private router: Router,
               private alertService: AlertService
            ) { 
              this.subscription = this.adminService.searchedStudent$.subscribe(
                searchedStudent => {
                  this.studentUser = searchedStudent;
                  // Getting List of enrolled semester for the student
                  if(this.studentUser && this.studentUser.currentSemester>0){
                    this.studentEnrolledOnce = true;
                    for (let i = 1; i <= this.studentUser.currentSemester; i++) {
                      this.enrolledSemList.push(i);
                    }
                  }
                }
              )
            }

  ngOnInit() {
    if(!this.studentUser){
        this.router.navigateByUrl('/admin/student');
    }
    this.semesterSelectForm = new FormGroup ({
      select_semester: new FormControl('',[Validators.required])
    })
  }
  
  deleteStudent(){
    this.adminService.deleteStudent(this.studentUser.studentId).subscribe(
      data => { 
        this.router.navigateByUrl('/admin/student');
        this.alertService.success("Student Deleted Successfully!")
      }
    );
  }

  getSemesterMarks(semester) {
    this.adminService.getStudentEnrolledSubjectMarks(this.studentUser.studentId,semester)
      .subscribe(
        semesterMarks => {
          // Set the marks for selected semester
          this.adminService.setSelectedSemesterMarks(semesterMarks);
          // Navigate to update marks view
          let studentId = this.studentUser.studentId;
          this.router.navigate(['admin', 'student', 'view', studentId, 'update-marks'])
        },
      );
  }

  semesterSelectFormOnSubmit(){
    if(this.semesterSelectForm.valid){
      let selectedSemester = this.semesterSelectForm.get('select_semester').value
      this.getSemesterMarks(selectedSemester)
    }
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
