import { Component, OnInit,Input, ApplicationModule } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { select, Store } from "@ngrx/store";
import { Student } from '../counter/state/student.state';
import { StudentService } from '../student/student.services';

import { map } from 'rxjs/operators';
import {  deleteStudent, retrieveStudentList, updateStudent } from "../counter/state/student.action";
import { getBooks, selectorStudent } from '../counter/state/student.selectors';
import { AppState } from '../counter/state/app.state';
import { StudentState } from '../counter/state/student.reducer';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  // Students: ReadonlyArray<Student>;
  postForm:FormGroup;
  name:string="";
  address:string="";
  workSheet:string="";
  @Input() students: Array<Student>;
  // books$ = this.store.select(getBooks);
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
   
 
deleteStudents(id:number){
  alert(id);
  this.store.dispatch(deleteStudent({id}));
 /* 
  this.http.delete("https://localhost:5001/api/Student/"+form.value.id,{responseType:"text"}).subscribe(data=>{
  console.log(data);
},(error)=>{
  console.log("unable to update student"+error);
});
*/
}
 
getStudent(){
  return getBooks;
}

}
