import { Component, OnInit,Input, EventEmitter } from '@angular/core';
import { COURSES } from "./data";
import { interval } from 'rxjs';
import { take,map  } from 'rxjs/operators';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
  @Input()
  courses=COURSES
  date=new Date(2000,4,1)
  salary=1000
  CourseEmmiter=new EventEmitter<string>();
  numbers = interval(1000);
  takeThree=this.numbers.pipe(take(3),map((v) => (Date.now())));
 
  constructor() { }
 
  ngOnInit(): void {
  }
  cardClasses (){
    if(this.courses.id){
      
    }
    return {
      red:true
    }
  }
  clickMe(msg:string){
this.CourseEmmiter.emit(this.courses);
this.takeThree.subscribe(value => console.log("Subscriber: " + value));
  }
}
