import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { IReportStudent } from '../../../../shared/_models/interfaces';
import {ClrDatagridComparatorInterface} from "@clr/angular";
import {SortOrder} from '@clr/angular';

@Component({
  selector: 'app-class-result',
  templateUrl: './class-result.component.html',
  styleUrls: ['./class-result.component.css']
})
export class ClassResultComponent {

  errorMessage: string;
  classResult: IReportStudent[];
  percentageComparator = new PercentageComparator();
  preSorted = SortOrder.Desc;

  constructor( private adminService: AdminService ) { }

  getClassResult(course: string, batch: string, threshold: number){
      if(isNaN(threshold)|| threshold>100 || threshold<0){
          this.errorMessage = "Please select a valid threshold, value range(0,100)."
      } else {
        this.adminService.getClassResultReport(course, batch, threshold)
              .subscribe(
                data => {
                  this.classResult = data;
                  // console.log(data)
                  this.errorMessage = undefined;
                },
                err => {
                  this.classResult = undefined;
                  this.errorMessage = "No student found above this threshold.";
                }
              );
      }
  }
}

class PercentageComparator implements ClrDatagridComparatorInterface<IReportStudent> {
  compare(a: IReportStudent, b: IReportStudent) {
      return a.percentage - b.percentage;
  }
}