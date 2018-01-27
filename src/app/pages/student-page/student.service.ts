// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { User } from '../../shared/_models/user';

// @Injectable()
// export class StudentService {
//     constructor(private http: HttpClient) { }

//     getById(id: number) {
//         return this.http.get('/api/student/' + id);
//     }

//     create(user: User) {
//         return this.http.post('/api/student', user);
//     }

//     update(user: User) {
//         return this.http.put('/api/student/' + user.id, user);
//     }

//     delete(id: number) {
//         return this.http.delete('/api/student/' + id);
//     }
// }