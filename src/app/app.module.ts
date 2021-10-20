import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { HttpClientModule } from "@angular/common/http";
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { studentsReducer } from './counter/state/student.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from './student/student.effects';
import { HeaderComponent } from './header/header.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentsComponent } from './students/students.component';
import { AppRoutingModule } from './app.routing.module';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StudentComponent,
    CounterComponent,
    CounterOutputComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forFeature("students", studentsReducer),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([StudentsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
