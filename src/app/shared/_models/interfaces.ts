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
    password: string,
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
    subject_id: string,
    marks: string
}

export interface IApiResponse {
    status: boolean;
    error?: string;
}