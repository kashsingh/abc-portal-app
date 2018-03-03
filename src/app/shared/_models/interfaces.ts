export interface IUser {
    userId?: number;
    username: string;
    password?: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface IStudentUser {
	firstname:string,
    lastname: string,
    password?: string,
    username: string,
	course?: string,
    batch?: string,
    email: string,
    studentId?: number,
    currentSemester?: number
}

export interface ICourseSubject {
    id?: number,
    course: string,
    subject_name: string
}

export interface IMarks {
    semester: number,
    marks: number,
    studentId: number,
    subjectId: number,
    subjectName: string
}

export interface IUpdatedMarks {
    subjectId: string;
    marks: string;
}

export interface ISubjectMarksList {
    subjectMarks: IUpdatedMarks[];
}

export interface IApiResponse {
    status: boolean;
    error?: string;
}

export interface IReportStudent {
    student: IStudentUser;
    percentage: number;
}

export interface ISubjectScore{
    subjectId : number,
    subjectName : string,
    courseId : number,
    averageMarks : number
}

export interface IReportScoringSubjects {
    high: ISubjectScore;
    low: ISubjectScore;
}