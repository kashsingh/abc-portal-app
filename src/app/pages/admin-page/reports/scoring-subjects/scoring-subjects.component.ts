import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { IReportScoringSubjects } from '../../../../shared/_models/interfaces';

@Component({
  selector: 'app-scoring-subjects',
  templateUrl: './scoring-subjects.component.html',
  styleUrls: ['./scoring-subjects.component.css']
})
export class ScoringSubjectsComponent {

  errorMessage: string;
  scoringSubjects: IReportScoringSubjects;
  noMarksRecordFound: boolean;

  constructor(
    private adminService: AdminService
  ) { }

  findScoringSubjects(course: string, batch: string){
    this.adminService.getScoringSubjectReport(course, batch)
          .subscribe(
            data => {
              this.scoringSubjects = data;
              this.errorMessage = undefined;
            }, 
            err => {
              this.errorMessage = err.error.message;
              this.scoringSubjects = undefined;
            }
          );
  }

}
