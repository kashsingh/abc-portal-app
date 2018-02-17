import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { Subscription } from 'rxjs/Subscription';
import { IMarks, IUpdatedMarks, ISubjectMarksList } from '../../../../shared/_models/interfaces';
import { FormGroup, Validators, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { AlertService } from '../../../../shared/_services/index';

@Component({
  moduleId: module.id,
  templateUrl: './student-marks-update.component.html',
  styleUrls: ['./student-marks-update.component.css']
})
export class StudentMarksUpdateComponent implements OnInit, OnDestroy {

  existingSemesterMarks: IMarks[];
  private subscription: Subscription;
  subjectMarksCopy : IMarks[] = [];
  editModal: false;

  studentId: number;
  semester: number;
  apiRequest: ISubjectMarksList = {} as any;;

  marksUpdateForm: FormGroup;

  constructor(
    public adminService: AdminService,
    private router: Router,
    private alertService: AlertService,
    private formBuilder: FormBuilder
  ){ 
    this.subscription = this.adminService.selectedSemesterMarks$.subscribe(
      selectedSemesterMarks=>{
        this.existingSemesterMarks = selectedSemesterMarks;
        this.semester = selectedSemesterMarks[0].semester;
        this.studentId = selectedSemesterMarks[0].studentId;
      }
    );

    this.createForm();
  }

  ngOnInit() {
    if(!this.existingSemesterMarks){
        this.router.navigateByUrl('/admin/student');
    }

    this.setSubjectMarks(this.existingSemesterMarks);
  }

  createForm(){
    this.marksUpdateForm = this.formBuilder.group ({
      subjectMarks: this.formBuilder.array([])
    });
  }

  ngOnChanges() {
    this.setSubjectMarks(this.existingSemesterMarks);
  }

  get subjectMarks(): FormArray {
    return this.marksUpdateForm.get('subjectMarks') as FormArray;
  }  

  setSubjectMarks(existingSubjectMarks: IMarks[]) {
    const subjectMarkFGs = existingSubjectMarks.map(subjectMark => this.formBuilder.group(subjectMark));
    const subjectMarksFormArray = this.formBuilder.array(subjectMarkFGs);
    this.marksUpdateForm.setControl('subjectMarks', subjectMarksFormArray);
  }

  onSubmit() {
    this.prepareSaveMarks();
    this.adminService.updateMarks(this.apiRequest, this.studentId, this.semester)
      .subscribe(
        sucess => {
          this.alertService.success('Marks updated successfully.');
          this.existingSemesterMarks = this.subjectMarksCopy;
          this.ngOnChanges();
          this.editModal=false;
        },
        error => {
          this.alertService.error('Something terrible happened.');
          this.editModal=false;
        }
      );
    
  }

  prepareSaveMarks() {
    const formModel = this.marksUpdateForm.value;

    this.subjectMarksCopy = formModel.subjectMarks.map(
      (subjectMark: IMarks) => Object.assign({}, subjectMark)
    );

    let updatedSemesterMarks : IUpdatedMarks[] = [];

    this.subjectMarksCopy.forEach(element => {
      let updateMark: IUpdatedMarks = {} as any;
      updateMark.marks = String(element.marks);
      updateMark.subjectId = String(element.subjectId);
      updatedSemesterMarks.push(updateMark);      
    });

    this.apiRequest.subjectMarks = updatedSemesterMarks;
}

  revert() { this.ngOnChanges(); }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
