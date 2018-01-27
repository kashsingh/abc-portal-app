import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StudentUser, CourseSubject } from "../../shared/_models/interfaces";

@Injectable()
export class AdminService {
    constructor(private http: HttpClient) { }

    getStudent(id: number) {
        return this.http.get('/api/admin/student/' + id);
    }

    createStudent(studentUser: StudentUser) {
        return this.http.post('/api/admin/student/create', studentUser);
    }

    updateStudent(studentUser: StudentUser, id: number) {
        return this.http.put('/api/admin/student/'+id+'/update', studentUser);
    }

    deleteStudent(id: number) {
        return this.http.delete('/api/admin/student/' + id + '/delete');
    }

    createSubject(subject: CourseSubject) {
        return this.http.post('/api/admin/subject/create', subject);
    }

    getAllSubjects(course: string) {
        return this.http.get('/api/admin/subject/all-subjects/course/' + course);
    }

    updateSubject(subject: CourseSubject) {
        return this.http.put('/api/admin/subject/update', subject);
    }

    deleteSubject(id: number) {
        return this.http.delete('/api/admin/subject/' + id + '/delete');
    }

    updateMarks(subjectMarks: any, id: number, sem: number) {
        return this.http.put('/api/admin/student/'+id+'semester/'+sem+'/update-marks', subjectMarks);
    }


}