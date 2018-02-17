import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IStudentUser, ICourseSubject, IApiResponse, IMarks } from "../../shared/_models/interfaces";
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {
    constructor(private http: HttpClient) { }

    baseUrl = "http://localhost:8080/api/student/";

    getStudentDetails(): Observable<IStudentUser> {
        return this.http.get<IStudentUser>(this.baseUrl+'view-details')
            .pipe(
                catchError(this.handleError)
            );;
    }

    updateStudentDetails(studentUser: IStudentUser): Observable<boolean> {
        return this.http.put<IApiResponse>(this.baseUrl + 'update', studentUser)
            .pipe(
                map(res => res.status),
                catchError(this.handleError)
            );
	}

	enrollSemester(subjects: ICourseSubject[]): Observable<boolean> {
        return this.http.post<IApiResponse>(this.baseUrl + 'enroll-semester', subjects)
            .pipe(
                map(res => res.status),
                catchError(this.handleError)
            );
    }

    getStudentEnrolledSubjects(): Observable<ICourseSubject[]> {
        return this.http.get<ICourseSubject[]>(
            this.baseUrl + 'enrolled-subjects');
    }

    getAllCourseSubjects(): Observable<ICourseSubject[]> {
        return this.http.get<ICourseSubject[]>(
            this.baseUrl + 'all-course-subjects');
    }

    viewResult(semester: number): Observable<IMarks[]> {
        return this.http.get<IMarks[]>(this.baseUrl + 'view-result/semester/' + semester);
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