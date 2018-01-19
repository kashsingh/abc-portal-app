import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageCourseComponent } from './manage-course/manage-course.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { ReportsComponent } from './reports/reports.component';
import { SubjectCreateComponent } from './manage-course/subject-create/subject-create.component';
import { ViewSubjectsComponent } from './manage-course/view-subjects/view-subjects.component';
import { SubjectDeleteComponent } from './manage-course/subject-delete/subject-delete.component';
import { SubjectUpdateComponent } from './manage-course/subject-update/subject-update.component';
import { StudentCreateComponent } from './manage-student/student-create/student-create.component';
import { ViewStudentComponent } from './manage-student/view-student/view-student.component';
import { StudentUpdateComponent } from './manage-student/student-update/student-update.component';
import { StudentMarksUpdateComponent } from './manage-student/student-marks-update/student-marks-update.component';
import { StudentDeleteComponent } from './manage-student/student-delete/student-delete.component';
import { AdminMenuComponent } from "./admin-menu/admin-menu.component";
const routes: Routes = [
	{ 
	    path: '',
        //component: AdminPageComponent,
        children: [ 
            //Main Menu Path
            {
                path: '',
                component: AdminMenuComponent,
                pathMatch: "full"
            },
            // Manage Course Path
            {
                path: 'course',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        component: ManageCourseComponent
                    },
                    {
                        path: 'create',
                        component: SubjectCreateComponent
                    },
                    {
                        path: 'view/allsubjects',
                        component: ViewSubjectsComponent
                    },
                    {
                        path: 'edit',
                        component: SubjectUpdateComponent
                    },
                    {
                        path: 'delete',
                        component: SubjectDeleteComponent
                    }
                ]
            },
            // Manage Student Path
            {
                path: 'student',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',  
                        component: ManageStudentComponent
                    },
                //]}
                    {
                        path: 'create',
                        component: StudentCreateComponent
                    },
                    {
                        path: 'view',
                        component: ViewStudentComponent
                    },
                    {
                        path: 'edit',
                        component: StudentUpdateComponent
                    },
                    {
                        path: 'delete',
                        component: StudentDeleteComponent
                    },
                    {
                        path: 'update-marks',
                        component: StudentMarksUpdateComponent
                    },			   
                ]
            },
            // Reports Path
            {
                path: 'reports',
                component: ReportsComponent
            }	
	   ]
	}  
];

    @NgModule({
        imports: [
            RouterModule.forChild(routes)
        ],
        exports: [
            RouterModule
        ]
    })
    export class AdminPageRoutingModule { }