import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IStudentUser, ICourseSubject, IApiResponse } from "../../shared/_models/interfaces";
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AdminService {
    constructor(private http: HttpClient) { }

    baseUrl = "http://localhost:8080/api/admin/";

    private searchedStudentSource = new BehaviorSubject<IStudentUser>(undefined);

    searchedStudent$ = this.searchedStudentSource.asObservable();

    setSearchedStudent(student: any) {
        this.searchedStudentSource.next(student);
      }
    
    getStudent(id: number): Observable<IStudentUser> {
        return this.http.get<IStudentUser>(this.baseUrl+'student/'+id)
            .pipe(
                catchError(this.handleError)
            );;
    }

    createStudent(studentUser: IStudentUser) {
        return this.http.post(this.baseUrl + 'student/create', studentUser);
    }

    updateStudent(studentUser: IStudentUser, id: number) {
        return this.http.put(this.baseUrl + 'student/'+id+'/update', studentUser);
    }

    deleteStudent(id: number): Observable<boolean> {
        return this.http.delete<IApiResponse>(this.baseUrl + 'student/' + id + '/delete')
                .pipe(
                    map(res => res.status),
                    catchError(this.handleError)
                );
    }

    createSubject(subject: ICourseSubject): Observable<boolean> {
        return this.http.post<IApiResponse>(this.baseUrl + 'subject/create', subject)
                .pipe(
                    map(res => res.status),
                    catchError(this.handleError)
                );;
    }

    getAllSubjects(course: string) {
        return this.http.get(this.baseUrl + 'subject/all-subjects/course/' + course);
    }

    updateSubject(subject: ICourseSubject) {
        return this.http.put(this.baseUrl + 'subject/update', subject);
    }

    deleteSubject(id: number){
        return this.http.delete(this.baseUrl + 'subject/' + id + '/delete');
    }

    updateMarks(subjectMarks: any, id: number, sem: number) {
        return this.http.put(this.baseUrl + 'student/'+id+'semester/'+sem+'/update-marks', subjectMarks);
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            let errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
      };
      

}