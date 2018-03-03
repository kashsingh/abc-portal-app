import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EnrollSemesterComponent } from './enroll-semester/index'; 
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewResultComponent } from './view-result/view-result.component'
import { StudentMenuComponent } from './student-menu/student-menu.component';

const routes: Routes = [
	{ 
	    path: '',
        children: [ 
            { path: '', component: StudentMenuComponent, pathMatch: 'full', data: {depth: 2} },
            { 
                path: 'profile', 
                children: [
                        { path: '', component: ViewProfileComponent, pathMatch: "full", data: {depth: 3} },
                        { path: 'edit', component: EditProfileComponent, data: {depth: 4} }
                    ]
            },   
            { path: 'semester-enroll', component: EnrollSemesterComponent, data: {depth: 3} },
            { path: 'result', component: ViewResultComponent, data: {depth: 3} }	
	   ]
	}  
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class StudentPageRoutingModule { }