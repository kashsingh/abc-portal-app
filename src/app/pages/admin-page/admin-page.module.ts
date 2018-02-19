import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageRoutingModule } from "./admin-page.routing";
import { ClarityModule } from "@clr/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManageCourseComponent } from './manage-course/manage-course.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { ReportsComponent } from './reports/reports.component';
import { SubjectCreateComponent } from './manage-course/subject-create/subject-create.component';
import { ViewSubjectsComponent } from './manage-course/view-subjects/view-subjects.component';
import { SubjectUpdateComponent } from './manage-course/subject-update/subject-update.component';
import { StudentCreateComponent } from './manage-student/student-create/student-create.component';
import { ViewStudentComponent } from './manage-student/view-student/view-student.component';
import { StudentUpdateComponent } from './manage-student/student-update/student-update.component';
import { StudentMarksUpdateComponent } from './manage-student/student-marks-update/student-marks-update.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { TopStudentComponent } from './reports/top-student/top-student.component';
import { ScoringSubjectsComponent } from './reports/scoring-subjects/scoring-subjects.component';
import { ClassResultComponent } from './reports/class-result/class-result.component';
import { AdminService } from './admin.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../shared/_guards/jwt.interceptor';
import { AuthenticationService,  } from '../../shared/_services/index';
import { MarksValidatorDirective } from './manage-student/student-marks-update/marks-validator.directive';
import { ShowErrorsComponent } from './manage-student/student-marks-update/show-errors/show-errors.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

@NgModule({
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    ClarityModule.forChild(),
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
  ],
  declarations: [
    ShowErrorsComponent,
    MarksValidatorDirective,
    ManageCourseComponent, 
    ManageStudentComponent, 
    ReportsComponent, 
    SubjectCreateComponent, 
    ViewSubjectsComponent, 
    SubjectUpdateComponent, 
    StudentCreateComponent, 
    ViewStudentComponent, 
    StudentUpdateComponent, 
    StudentMarksUpdateComponent, 
    TopStudentComponent,
    ScoringSubjectsComponent,
    ClassResultComponent,
    AdminMenuComponent,
    AdminProfileComponent,
  ],
  providers: [
    AdminService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]
})
export class AdminPageModule { }
