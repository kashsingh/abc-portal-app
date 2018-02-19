import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  // isAdmin: boolean;
  pageLinks = [];

  studentLinks = [
    { 
      viewTitle: "Your Account",
      sublinks: [
        { link: ['/', 'student', 'profile'], label: "View/Edit Profile" },
        { link: ['/', 'student', 'profile', 'edit'], label: "Change Password" },
        { link: ['/', 'student', 'semester-enroll'], label: "Enroll Semester" },
        { link: ['/', 'student', 'result' ], label: "View Result" },
      ]
    }
  ]

  adminLinks = [
    { 
      viewTitle: "Your Account",
      sublinks: [
        { link: ['/', 'admin', 'profile'], label: "View Profile" },
      ]
    },
    { 
      viewTitle: "Manage Student",
      sublinks: [
        { link: ['/', 'admin', 'student', 'create'], label: "Create Student User" },
        { link: ['/', 'admin', 'student', 'view'], label: "View/Edit Student Details" },
      ]
    },
    { 
      viewTitle: "Manage Course",
      sublinks: [
        { link: ['/', 'admin', 'course', 'create-subject'], label: "Create New Subject" },
        { link: ['/', 'admin', 'course', 'all-subjects', ], label: "View/Delete All Subjects" },
      ]
    },
    { 
      viewTitle: "Report",
      sublinks: [
        { link: ['/', 'admin', 'reports', 'top-student'], label: "Find Class Topper" },
        { link: ['/', 'admin', 'reports', 'scoring-subjects'], label: "Find Scoring Subjects" },
        { link: ['/', 'admin', 'reports', 'class-result'], label: "Find Class Result" },

      ]
    },
  ]
   

  constructor(){
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if(currentUser.admin){
      this.pageLinks = this.adminLinks;
    } else {
      this.pageLinks = this.studentLinks;
    }
  }
}
