import { Component, OnInit,Input, ApplicationModule } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {NgForm} from '@angular/forms';
import { select, Store } from "@ngrx/store";
import { Student } from '../counter/state/student.state';
import { GoogleBooksService } from '../student/student.services';

import { map } from 'rxjs/operators';
import { retrieveStudentList } from "../counter/state/student.action";
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
  name:string="";
  address:string="";
  workSheet:string="";
  @Input() students: Array<Student>;
 // books$ = this.store.select(getBooks);
  constructor(private http:HttpClient,private store:Store<{id:Int8Array,workSheetName:string,address:string,courses:Array<string>}>,
    private booksService: GoogleBooksService,
    private storea: Store<{ students: StudentState }>
,

   ) { }
  
  ngOnInit(): void {
  // this.students.map(this.getStudent());
  //this.store.select(getBooks);
  this.booksService.getStudents()
  .subscribe((students) => 
  {
    // this.students=students;
    console.log(students);
    this.store.dispatch(retrieveStudentList({ students }))}
  
  );
  this.storea.select(selectorStudent).subscribe(c=>{
    console.log(c);
    debugger;
  });
    // this.store.select(getBooks).subscribe(x=>{
  //   console.log('getBooks',x);
    
  // });
  // this.storea.select(getBooks).subscribe(x=>{
  //   console.log('getBooks',x)
  // })
  this.storea.subscribe(st=>{
    console.log('direct Store',st.students );
  })
 
  // this.storea.pipe(select(getBooks)).subscribe(x=>{
  //   console.log(x);
  // });
  // this.booksService.getStudents()
  // .subscribe((Students) =>{
  //   console.log(Students)
  // });

  }
  addStudent(form:NgForm){
    console.log(form);
    const body={
      "name": form.value.studentName,
      "address": form.value.address,
      "wokSheetName": form.value.workSheet
    }
    this.http.post("https://localhost:5001/api/Student",body,{responseType:"text"}).subscribe(data=>{
      console.log(data);
    },(error)=>{
    console.log("unable to add student"+error);
  });
}
updateStudents(form:NgForm){
  console.log(form);
  const body={
    "name": form.value.studentName,
    "address": form.value.address,
    "wokSheetName": form.value.workSheet
  }
  this.http.put("https://localhost:5001/api/Student/"+form.value.studentId,body,{responseType:"text"}).subscribe(data=>{
    console.log(data);
  },(error)=>{
  console.log("unable to update student"+error);
});
}
deleteStudents(form:NgForm){
  console.log(form);
 
  this.http.delete("https://localhost:5001/api/Student/"+form.value.id,{responseType:"text"}).subscribe(data=>{
    console.log(data);
  },(error)=>{
  console.log("unable to update student"+error);
});
}
getStudent(){
 return getBooks;
  //return  this.http.get('https://localhost:5001/api/Student');
}
getStudentCourses(id:Int16Array){
  
  return  this.http.get('https://localhost:5001/api/Student/getResource/'+id).subscribe(data=>{
    console.log(data);
  },(error)=>{
  console.log("unable to show student Courses"+error);
});
}
}
