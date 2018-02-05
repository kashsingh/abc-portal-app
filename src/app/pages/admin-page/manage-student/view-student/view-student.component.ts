import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';
import { IStudentUser } from '../../../../shared/_models/interfaces';
import { Subscription } from 'rxjs/Subscription';
import { AlertService } from '../../../../shared/_services/index';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  studentUser: IStudentUser;
  private subscription: Subscription;
  studentDeleteModal = false;


  constructor( public adminService: AdminService,
               private router: Router,
               private alertService: AlertService
            ) { 
              this.subscription = this.adminService.searchedStudent$.subscribe(
                searchedStudent => {
                  this.studentUser = searchedStudent;
                }
              )
            }

  ngOnInit() {
    if(!this.studentUser){
        this.router.navigateByUrl('/admin/student');
    }
  }
  
  deleteStudent(){
    this.adminService.deleteStudent(this.studentUser.studentId).subscribe(
      data => { 
        console.log("Student Deleted Successfully!")
        this.router.navigateByUrl('/admin/student');
        this.alertService.success("Student Deleted Successfully!")
        console.log("Alert Service Called.")
      }

    );
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
