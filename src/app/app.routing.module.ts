import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { StudentComponent } from "./student/student.component";
import { AddStudentComponent } from "./add-student/add-student.component";
import { studentRoutingModule } from "./student/student.module";

const routes:Routes=[
  
    {
        path: 'student',
        loadChildren: () =>
          import('./student/student.module').then((m) => m.studentRoutingModule),
      }
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule,studentRoutingModule]
})

export class AppRoutingModule{}