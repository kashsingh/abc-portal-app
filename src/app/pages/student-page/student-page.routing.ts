import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EnrollSemesterComponent } from './enroll-semester/enroll-semester.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewResultComponent } from './view-result/view-result.component'
import { StudentMenuComponent } from './student-menu/student-menu.component';

const routes: Routes = [
	{ 
	    path: '',
        children: [ 
            {
                path: '',
                component: StudentMenuComponent,
                pathMatch: 'full'
            },
            {
                path: 'profile/view',
                component: ViewProfileComponent,
                pathMatch: "full"
            },
            {
                path: 'profile/edit',
                component: EditProfileComponent,
            },
            {
                path: 'semester/enroll',
                component: EnrollSemesterComponent
            },
            {
                path: 'result',
                component: ViewResultComponent
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
export class StudentPageRoutingModule { }