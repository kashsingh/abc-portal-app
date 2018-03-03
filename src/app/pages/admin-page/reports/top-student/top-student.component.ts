import { Component } from '@angular/core';
import { IReportStudent } from '../../../../shared/_models/interfaces';
import { AdminService } from '../../admin.service';
import { AlertService } from '../../../../shared/_services';

@Component({
  selector: 'app-top-student',
  templateUrl: './top-student.component.html',
  styleUrls: ['./top-student.component.css']
})
export class TopStudentComponent {

  report: IReportStudent;
  errorMessage: string;

  constructor(
    private adminService: AdminService,
    private alertService: AlertService
  ) { }

  findTopper(course: string, batch: string){
    this.adminService.getTopperReport(course,batch).subscribe(
      data => {
        this.report = data;
        this.errorMessage = undefined;
      },
      err => {
        this.report = undefined;
        this.errorMessage = err.error.message;
      }
    );
  }


}
