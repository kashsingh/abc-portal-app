export interface User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface StudentUser {
    studentId?: number,
    username: string,
	password: string,
	firstname:string,
	lastname: string,
	email: string,
	course?: string,
    batch?: string,
    currentSemester?: number
}

export interface CourseSubject {
    id?: number,
    course: string,
    subjectName: string
}

export interface Marks {
    subject_id: string,
    marks: string
}