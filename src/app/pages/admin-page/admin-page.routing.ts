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
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const routes: Routes = [
	{ 
	    path: '',
        children: [ 
            // Main Menu Path
            { path: '', component: AdminMenuComponent, pathMatch: "full", data: {depth: 2} },

            // Admin Profile
            { path: 'profile', component: AdminProfileComponent, data: {depth: 3}},

            // Manage Course Path
            {
                path: 'course',
                children: [
                    { path: '', pathMatch: 'full', component: ManageCourseComponent, data: {depth: 3} },
                    { path: 'create-subject', component: SubjectCreateComponent, data: {depth: 4} },
                    { path: 'all-subjects', component: ViewSubjectsComponent, data: {depth: 4} },
                ]
            },

            // Manage Student Path
            {
                path: 'student',
                children: [
                    { path: '', pathMatch: 'full', component: ManageStudentComponent, data: {depth: 3} },
                    { path: 'create', component: StudentCreateComponent, data: {depth: 4} },
                    { path: 'view', 
                      children: [
                            {   path: '', pathMatch: 'full', redirectTo: '/admin/student' },
                            {   path: ':student-id',
                                children: [
                                    { path: '', component: ViewStudentComponent, pathMatch: 'full', data: {depth: 4} },
                                    { path: 'edit', component: StudentUpdateComponent, data: {depth: 4} },
                                    { path: 'update-marks', component: StudentMarksUpdateComponent, data: {depth: 4} }
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
                    { path: '', pathMatch: 'full', component: ReportsComponent, data: {depth: 3} },
                    { path: 'top-student', component: TopStudentComponent, data: {depth: 4} },
                    { path: 'scoring-subjects', component: ScoringSubjectsComponent, data: {depth: 4} },
                    { path: 'class-result', component: ClassResultComponent, data: {depth: 4} }
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