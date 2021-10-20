import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Component, OnInit,Input, ApplicationModule } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { select, Store } from "@ngrx/store";
import { Student } from '../counter/state/student.state';
import { StudentService } from '../student/student.services';
import { StudentState } from '../counter/state/student.reducer';
import { addStudent, deleteStudent, retrieveStudentList  } from "../counter/state/student.action";
import { selectorStudent } from '../counter/state/student.selectors';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @Input() students: Array<Student>;

  constructor(private http:HttpClient,private store:Store<{id:number,workSheetName:string,address:string,courses:Array<string>}>,
    private studentService: StudentService,
    private storea: Store<{ students: StudentState }>,) { }

    ngOnInit(): void {
      this.studentService.getStudents().subscribe((students) =>{
        this.store.dispatch(retrieveStudentList({ students }))
      }
      );
      
      this.storea.select(selectorStudent).subscribe(c=>{
        this.students=c;
        console.log('selector = ', c);
      });
    }
    alert(student?:number) {
      alert(student)
    }
    deleteStudents(id?:number){
      this.store.dispatch(deleteStudent({id}));
     /* 
      this.http.delete("https://localhost:5001/api/Student/"+form.value.id,{responseType:"text"}).subscribe(data=>{
      console.log(data);
    },(error)=>{
      console.log("unable to update student"+error);
    });
    */
    }
    getStudentCourses(id?:number){
  
      return  this.http.get('https://localhost:5001/api/Student/getResource/'+id).subscribe(data=>{
      console.log(data);
    },(error)=>{
      console.log("unable to show student Courses"+error);
    });
    }
}
