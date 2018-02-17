import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { IStudentUser } from "../../../shared/_models/interfaces";
import { AlertService } from '../../../shared/_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  currentUser: IStudentUser;

  constructor(
    private studentService: StudentService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.studentService.getStudentDetails().subscribe(
      data =>{
        this.currentUser = data;
      },
      err => {
        console.log(err);
        this.router.navigateByUrl("/student");
        this.alertService.error("Something really bad just happened.");
      }
    );
   }

  ngOnInit() {
  }

}
