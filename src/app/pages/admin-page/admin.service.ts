import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IStudentUser, ICourseSubject, IApiResponse, IMarks, IReportStudent, IReportScoringSubjects } from "../../shared/_models/interfaces";
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AdminService {
    constructor(private http: HttpClient) { }

    baseUrl = "http://localhost:8080/api/admin/";

    private searchedStudentSource = new BehaviorSubject<IStudentUser>(undefined);
    private selectedSemesterMarksSource = new BehaviorSubject<IMarks[]>(undefined);

    searchedStudent$ = this.searchedStudentSource.asObservable();
    selectedSemesterMarks$ = this.selectedSemesterMarksSource.asObservable();

    setSearchedStudent(student: any) {
        this.searchedStudentSource.next(student);
    }

    setSelectedSemesterMarks(marks: any) {
        this.selectedSemesterMarksSource.next(marks);
    }
    
    getStudent(id: number): Observable<IStudentUser> {
        return this.http.get<IStudentUser>(this.baseUrl+'student/'+id)
            .pipe(
                catchError(this.handleError)
            );;
    }

    createStudent(studentUser: IStudentUser): Observable<boolean> {
        return this.http.post<IApiResponse>(this.baseUrl + 'student/create', studentUser)
            .pipe(
                map(res => res.status),
                catchError(this.handleError)
            );
    }

    updateStudent(studentUser: IStudentUser, id: number): Observable<boolean> {
        return this.http.put<IApiResponse>(this.baseUrl + 'student/'+id+'/update', studentUser)
            .pipe(
                map(res => res.status),
                catchError(this.handleError)
            );
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
                );
    }

    getStudentEnrolledSubjectMarks(studentId: number, semester: number): Observable<IMarks[]> {
        return this.http.get<IMarks[]>(
            this.baseUrl + 'student/'+studentId+'/semester/'+semester+'/enrolled-subjects');
    }

    getAllCourseSubjects(course: string): Observable<ICourseSubject[]> {
        return this.http.get<ICourseSubject[]>(this.baseUrl + 'subject/all-subjects/course/' + course);
    }

    updateSubject(subject: ICourseSubject): Observable<boolean> {
        return this.http.put<IApiResponse>(this.baseUrl + 'subject/update', subject)
                .pipe(
                    map(res => res.status),
                    catchError(this.handleError)
                );
    }

    deleteSubject(id: number): Observable<boolean>{
        return this.http.delete<IApiResponse>(this.baseUrl + 'subject/' + id + '/delete')
                .pipe(
                    map(res => res.status),
                    catchError(this.handleError)
                );
    }

    updateMarks(subjectMarks: any, id: number, sem: number): Observable<boolean> {
        return this.http.post<IApiResponse>(this.baseUrl + 'student/'+id+'/semester/'+sem+'/update-marks', subjectMarks)
                .pipe(
                    map(res => res.status),
                    catchError(this.handleError)
                );
    }

    getTopperReport(course: string, batch: string): Observable<IReportStudent>{
        return this.http.get<IReportStudent>(this.baseUrl + 'report/course/'+course+'/batch/'+batch+'/topper');
    }

    getScoringSubjectReport(course: string, batch: string): Observable<IReportScoringSubjects>{
        return this.http.get<IReportScoringSubjects>(this.baseUrl+'report/course/'+course+'/batch/'+batch+'/scoring-subjects');
    }

    getClassResultReport(course: string, batch: string, threshold: number): Observable<IReportStudent[]>{
        return this.http.get<IReportStudent[]>(
            this.baseUrl + 'report/course/'+course+'/batch/'+batch+'/class-result/th/'+threshold
        );
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