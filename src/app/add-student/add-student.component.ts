import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Component, OnInit,Input, ApplicationModule } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { select, Store } from "@ngrx/store";
import { Student } from '../counter/state/student.state';
import { StudentService } from '../student/student.services';
import { StudentState } from '../counter/state/student.reducer';
import { addStudent, deleteStudent, retrieveStudentList, updateStudent } from "../counter/state/student.action";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  postForm:FormGroup;
  name:string="";
  address:string="";
  workSheet:string="";
  constructor(private http:HttpClient,private store:Store<{id:number,workSheetName:string,address:string,courses:Array<string>}>,
    private studentService: StudentService,
    private storea: Store<{ students: StudentState }>,) { }
    

  ngOnInit(): void {
  }
  addStudent(form:NgForm){
    console.log(form);
    const student:Student={      
      name: form.value.studentName,
      address: form.value.address,
      wokSheetName: form.value.workSheet
    }
    this.store.dispatch(addStudent({student}));
   // this.studentService.addStudents(student);
    /*  this.http.post("https://localhost:5001/api/Student",body,{responseType:"text"}).subscribe(data=>{
    console.log(data);
  },(error)=>{
    console.log("unable to add student"+error);
  });
  */
}
}
