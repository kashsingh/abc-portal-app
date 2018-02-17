import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { AlertService } from '../../../shared/_services';
import { IMarks } from '../../../shared/_models/interfaces';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {
  enrolledSemList = [];
  results: IMarks[];

  constructor(
    private studentService: StudentService,
    private alertService: AlertService
  ) { 
  }

  ngOnInit() {
    this.studentService.getStudentDetails().subscribe(
      data => {
        for (let i = 1; i <= data.currentSemester; i++) {
          this.enrolledSemList.push(i);
        }
      },
      err => {
        this.alertService.error("Error fetching student data. Please try again after sometime.")
      }
    );
  }

  getResult(semester: number){
    this.studentService.viewResult(semester).subscribe(
      data => {
        this.results = data;
      },
      err => {
        this.alertService.error("Error fetching semester result.")
      }
    );

  }

}
