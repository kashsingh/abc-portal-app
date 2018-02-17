import { Component, OnInit } from '@angular/core';
import { ICourseSubject } from '../../../../shared/_models/interfaces';
import { AdminService } from '../../admin.service';
import { AlertService } from '../../../../shared/_services/index';

@Component({
  selector: 'app-view-subjects',
  templateUrl: './view-subjects.component.html',
  styleUrls: ['./view-subjects.component.css']
})
export class ViewSubjectsComponent implements OnInit {
  
  subjects: ICourseSubject[];
  courseList : string[];
  subjectDeleteModal = false;
  // subjectEditModal = false;
  selectedSubject: ICourseSubject;
  

  constructor(
    private adminService: AdminService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    // !!! Need an API to get courseList !!!
    this.courseList = [
      "MEC",
      "CSE",
      "ECE"
    ];
  }

  getSubjects(selectedCourse: string){
    this.adminService.getAllCourseSubjects(selectedCourse)
      .subscribe(
        data => {
          this.subjects = data;
          // this.alertService.success("Subject Created Successfully!")
        },
        /* error handling */
        err => {
          this.alertService.error("Something really bad just happened.")
        }
      );
  }

  selectSubject(subject: ICourseSubject){
    this.selectedSubject = subject;
    // subjectEditModal.openSubjectEditModal()
  }

  showDeleteModal(subject: ICourseSubject){
      this.selectedSubject = subject;
      this.subjectDeleteModal = true;
  }

  deleteSubject(){
    this.adminService.deleteSubject(this.selectedSubject.id)
      .subscribe(
        data => {
          this.getSubjects(this.selectedSubject.course);
          this.alertService.success("Subject deleted successfully!");
          this.subjectDeleteModal = false;
        },
        /* error handling */
        err => {
          this.alertService.error("Something really bad just happened.");
          this.subjectDeleteModal = false;
        }
      );
  }

}
