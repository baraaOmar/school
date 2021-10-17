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
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StudentComponent,
    CounterComponent,
    CounterOutputComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({counter:counterReducer,studentsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
