import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from '../counter/state/student.state';

@Injectable({ providedIn: 'root' })
export class StudentService {
  constructor(private http: HttpClient) {}
  
  getStudents(): Observable<Array<Student>> {
    return this.http
    .get<Array<Student>>(
      'https://localhost:5001/api/Student'
      ).pipe(map((items) => items || []));
    }

    
    addStudents(body:Student) {
      return  this.http.post("https://localhost:5001/api/Student",body,{responseType:"text"}).subscribe(data=>{
        map((items) => items || []);
        },(error)=>{
          console.log("unable to add student"+error);
        });
      }
      addStudent(student: Student) {
        console.log("service add student");
        console.log(student);
        return this.http.post(
          `https://localhost:5001/api/Student`,
          student
        );
      }
      deleteStudent(id?: number) {
       alert("service delete student"+id);
       
        return this.http.delete(
          `https://localhost:5001/api/Student/`+id
        );
      }
      updateStudent(student: Student) {
        console.log("service update student");
        console.log(student);
        return this.http.put(
          `https://localhost:5001/api/Student/`+student.id,
          student
        );

        // updateStudent(student: Student) {
        //   console.log("service update student");
        //   console.log(student);
        //  return this.http.put("https://localhost:5001/api/Student/"+student.id,student);
        // }
      }
  }