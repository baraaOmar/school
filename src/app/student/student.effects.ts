import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { retrieveStudentList,addStudent, addStudentSuccess, updateStudent, updateStudentSuccess, deleteStudentSuccess,deleteStudent } from '../counter/state/student.action';
import { StudentService } from './student.services';

@Injectable()
export class StudentsEffects {
  constructor(
    private actions$: Actions,
    private studentService: StudentService
    ) {}
    
    // loadMovies$ = createEffect(() => this.actions$.pipe(
    //   ofType(addStudent),
    //   mergeMap((action) =>this.studentService.addStudents(action.student)
    //   .pipe(
    //     map(students => ({ type: "[Student list] add student", payload: students })),//here it dispatch as reaction 
    //     catchError(() => EMPTY)
    //     ))
    //     )
    //     );
    //عملتي انه الايفيكت اخد الاكشن وعدل عالداتا بيس وبعدها هدا التعديل لازم ينعكس على اللوكال والفرونت
    addStudent$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(addStudent),
        mergeMap((action) => {
          return this.studentService.addStudent(action.student).pipe(//on DB
            map((data) => {  
              return addStudentSuccess({ student: action.student });//update state locally
            })
            );
          })
          );
        }); 
        updateStudent$ = createEffect(() => {
          return this.actions$.pipe(
            ofType(updateStudent),
            mergeMap((action) => {
              return this.studentService.updateStudent(action.student).pipe(//on DB
                map((data) => {  
                  console.log("action.student")
                  
                  console.log(action.student)
                  return updateStudentSuccess({ student: action.student });//update state locally
                })
                );
              })
              );
            }); 
            deleteStudent$ = createEffect(() => {
              return this.actions$.pipe(
                ofType(deleteStudent),
                mergeMap((action) => {
                  return this.studentService.deleteStudent(action.id).pipe(//on DB
                    map((data) => {  
                      console.log("action delete.student"+action.id)
                      return deleteStudentSuccess({ id: action.id });//update state locally
                    })
                    );
                  })
                  );
                });
                /* postStudent$ = createEffect(() => this.actions$.pipe(
                  ofType(addStudent),
                  mergeMap(() =>this.studentService.getStudents()//here must be the post action from services which deal with api
                  .pipe(
                    map(students => ({ type: "[Student list] add student", payload: students })),//here to be updated
                    catchError(() => EMPTY)
                    ))
                    )
                    );    */
                    
                  }