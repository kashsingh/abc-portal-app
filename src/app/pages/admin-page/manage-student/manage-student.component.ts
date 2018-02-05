import { Component, OnInit } from '@angular/core';
import { IStudentUser } from '../../../shared/_models/interfaces';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../shared/_services/index';

@Component({
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent{
  findStudentModal = false;
  studentFound = true;
  alertMessage: any;

  constructor(
    private adminService: AdminService,
    private router: Router,
  ){}

  searchStudent(studentId) {
    this.adminService.getStudent(studentId)
      .subscribe(
        studentUser => {
          this.adminService.setSearchedStudent(studentUser);
          this.router.navigate(['admin', 'student', 'view', studentUser.studentId])
        },
        err => {
          this.studentFound = false;
        }
      );
    
  }

}
