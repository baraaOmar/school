import { createAction,props } from "@ngrx/store";
import { Student } from "./student.state";

export const retrieveStudentList=createAction( '[Student List/API] Retrieve Students Success',props<{students:Array<Student>}>());