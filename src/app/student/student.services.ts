import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from '../counter/state/student.state';
 
@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  constructor(private http: HttpClient) {}
 
  getStudents(): Observable<Array<Student>> {

    return this.http
    .get<Array<Student>>(
      'https://localhost:5001/api/Student'
    ).pipe(map((items) => items || []));

    return this.http
      .get<{ items: Array<any> }>(
        'https://localhost:5001/api/Student'
      ).pipe(map((student) => student.items || []));
  }
}