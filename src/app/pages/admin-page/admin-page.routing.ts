import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageCourseComponent } from './manage-course/manage-course.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { ReportsComponent } from './reports/reports.component';
import { SubjectCreateComponent } from './manage-course/subject-create/subject-create.component';
import { ViewSubjectsComponent } from './manage-course/view-subjects/view-subjects.component';
import { StudentCreateComponent } from './manage-student/student-create/student-create.component';
import { ViewStudentComponent } from './manage-student/view-student/view-student.component';
import { StudentUpdateComponent } from './manage-student/student-update/student-update.component';
import { StudentMarksUpdateComponent } from './manage-student/student-marks-update/student-marks-update.component';
import { AdminMenuComponent } from "./admin-menu/admin-menu.component";
import { TopStudentComponent } from './reports/top-student/top-student.component';
import { ScoringSubjectsComponent } from './reports/scoring-subjects/scoring-subjects.component';
import { ClassResultComponent } from './reports/class-result/class-result.component';

const routes: Routes = [
	{ 
	    path: '',
        children: [ 
            //Main Menu Path
            { path: '', component: AdminMenuComponent, pathMatch: "full" },
            // Manage Course Path
            {
                path: 'course',
                children: [
                    { path: '', pathMatch: 'full', component: ManageCourseComponent },
                    { path: 'create', component: SubjectCreateComponent },
                    { path: 'view/allsubjects', component: ViewSubjectsComponent },
                ]
            },
            // Manage Student Path
            {
                path: 'student',
                children: [
                    { path: '', pathMatch: 'full', component: ManageStudentComponent },
                    { path: 'create', component: StudentCreateComponent },
                    { path: 'view', 
                      children: [
                            {   path: '', pathMatch: 'full', redirectTo: '/admin/student' },
                            {   path: ':student-id',
                                children: [
                                    { path: '', component: ViewStudentComponent, pathMatch: 'full' },
                                    { path: 'edit', component: StudentUpdateComponent },
                                    { path: 'update-marks', component: StudentMarksUpdateComponent }
                            ]
                            }
                        ]
                    }                    			   
                ]
            },
            // Reports Path
            {
                path: 'reports',
                children: [
                    { path: '', pathMatch: 'full', component: ReportsComponent },
                    { path: 'top-student', component: TopStudentComponent},
                    { path: 'scoring-subjects', component: ScoringSubjectsComponent },
                    { path: 'class-result', component: ClassResultComponent}
                ]
                
            }	
	   ]
	}  
];

    @NgModule({
        imports: [ RouterModule.forChild(routes) ],
        exports: [ RouterModule ],
    })
    export class AdminPageRoutingModule { }