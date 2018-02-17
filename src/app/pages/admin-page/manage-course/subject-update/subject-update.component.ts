import { Component, OnInit, Input, OnChanges, } from '@angular/core';
import { AdminService } from '../../admin.service';
import { AlertService } from '../../../../shared/_services/index';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICourseSubject } from '../../../../shared/_models/interfaces';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'subject-update',
  templateUrl: './subject-update.component.html',
  styleUrls: ['./subject-update.component.css']
})
export class SubjectUpdateComponent implements OnInit {

  subjectEditModal: boolean;
  subjectEditForm : FormGroup;
  @Input() selectedSubject : ICourseSubject;
  private existingSubject : ICourseSubject;

  constructor(
    private adminService: AdminService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.subjectEditForm = new FormGroup ({
      subject_name: new FormControl('',[Validators.required, Validators.minLength(4)])
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    const selectedSubject: SimpleChange = changes.selectedSubject;
    this.existingSubject = selectedSubject.currentValue;
    this.subjectEditForm.setValue({
      subject_name: this.existingSubject.subject_name
    })
  }

  get subject_name() { return this.subjectEditForm.get('subject_name'); }

  public onSubmit() {
    if(this.subjectEditForm.valid){
      // Check this
        this.existingSubject.subject_name = this.subjectEditForm.get('subject_name').value;
        this.adminService.updateSubject(this.existingSubject)
          .subscribe(
            data => {
              this.subjectEditModal = false;
              this.alertService.success("Subject Updated Successfully!")
            },
            /* error handling */
            err => {
              this.subjectEditModal = false;
              this.alertService.error("Something really bad just happened.")
            }
          );
    }
  }

  openSubjectEditModal(){
    this.subjectEditModal = true;
  }

}
