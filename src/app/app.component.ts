import { Component, Input, Output } from '@angular/core';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'school';
  welcome='hi every one';
 
  onKeyUp(title:string){
   this.welcome=title;
  }
  cardClasses(){
    
  }
}
