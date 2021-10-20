import { createAction,props } from "@ngrx/store";
import { Student } from "./student.state";

export const retrieveStudentList=createAction( '[Student List/API] Retrieve Students Success',props<{students:Array<Student>}>());
export const addStudent=createAction('[Student list] add student',props<{student:Student}>());
export const updateStudent=createAction('[Student list] update student',props<{student:Student}>());
export const updateStudentSuccess=createAction('[Student list] update student Success',props<{student:Student}>());
export const deleteStudent=createAction('[Student list] delete student',props<{id?:number}>());
export const deleteStudentSuccess=createAction('[Student list] delete student Success',props<{id?:number}>());
export const addStudentSuccess=createAction('[Student list] add student success',props<{student:Student}>());
