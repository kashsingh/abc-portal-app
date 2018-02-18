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
  noTopperFound: boolean;

  constructor(
    private adminService: AdminService,
    private alertService: AlertService
  ) { }

  findTopper(course: string, batch: string){
    this.adminService.getTopperReport(course,batch).subscribe(
      data => {
        this.report = data;
        this.noTopperFound = false;
      },
      err => {
        if(err.error.message === "Class topper doesn't exists."){
            this.noTopperFound = true;
            this.report = undefined;
        } else{
          this.alertService.error(err.error.message);
        }
      }
    );
  }


}
