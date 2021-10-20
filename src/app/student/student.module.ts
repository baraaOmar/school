import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../app.component';
import { StudentComponent } from '../student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { AddStudentComponent } from '../add-student/add-student.component';
import { UpdateStudentComponent } from '../update-student/update-student.component';
import { StudentsComponent } from '../students/students.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
    {
      path: '',
      component: StudentComponent,
      children: [
        { path: 'add', component: AddStudentComponent }
      ],
    },
  ];


@NgModule({
    exports:[RouterModule],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        RouterModule.forChild(routes)
      ],
    declarations: [
        HeaderComponent,
        AddStudentComponent,
        UpdateStudentComponent,
        StudentsComponent
      ]
})

export class studentRoutingModule{}