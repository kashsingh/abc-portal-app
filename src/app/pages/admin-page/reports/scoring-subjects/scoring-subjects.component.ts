import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { IReportScoringSubjects } from '../../../../shared/_models/interfaces';

@Component({
  selector: 'app-scoring-subjects',
  templateUrl: './scoring-subjects.component.html',
  styleUrls: ['./scoring-subjects.component.css']
})
export class ScoringSubjectsComponent {

  scoringSubjects: IReportScoringSubjects;
  noMarksRecordFound: boolean;

  constructor(
    private adminService: AdminService
  ) { }

  findScoringSubjects(course: string){
    this.adminService.getScoringSubjectReport(course)
          .subscribe(
            data => {
              this.scoringSubjects = data;
              this.noMarksRecordFound = false;
            }, 
            err => {
              this.noMarksRecordFound = true;
              this.scoringSubjects = undefined;
            }
          );
  }

}
