import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Student } from "./student.state";
import { AppState } from "./app.state";
import { StudentState } from "./student.reducer";

export const STUDENT_STATE_NAME = 'students';

const getStudents = createFeatureSelector<StudentState>("students");
export const selectorStudent = createSelector(getStudents, (state) => {
  return state.studentSate;
})

export const getBooks = createSelector(getStudents, (state) => {
  return state.studentSate;
});
