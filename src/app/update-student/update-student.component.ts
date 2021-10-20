import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Component, OnInit,Input, ApplicationModule } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { select, Store } from "@ngrx/store";
import { Student } from '../counter/state/student.state';
import { StudentService } from '../student/student.services';
import { StudentState } from '../counter/state/student.reducer';
import { addStudent, deleteStudent, retrieveStudentList, updateStudent } from "../counter/state/student.action";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  postForm:FormGroup;
  name:string="";
  address:string="";
  workSheet:string="";
  constructor(private http:HttpClient,private store:Store<{id:number,workSheetName:string,address:string,courses:Array<string>}>,
    private studentService: StudentService,
    private storea: Store<{ students: StudentState }>,) { }

  ngOnInit(): void {
  }
  updateStudents(form:NgForm){
    console.log(form);
    console.log("here is form");
    const student:Student={
      id:  form.value.studentId,
      name: form.value.studentName,
      address: form.value.address,
      wokSheetName: form.value.workSheet
    }
    this.store.dispatch(updateStudent({student}));
 /* this.http.put("https://localhost:5001/api/Student/"+form.value.studentId,student,{responseType:"text"}).subscribe(data=>{
    console.log(data);
  },(error)=>{
    console.log("unable to update student"+error);
  });
  */
}
}
