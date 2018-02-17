export interface IUser {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
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

export interface IReportScoringSubjects {
    
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