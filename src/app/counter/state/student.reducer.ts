import { createReducer,on } from "@ngrx/store";
import { AppState } from "./app.state";
import { retrieveStudentList } from "./student.action";
import { Student } from "./student.state";

export interface StudentState {
  studentsa: Student[];
}
export const initialState:StudentState={
  studentsa:[]
}

// export const initialState: AgreementStatusesState = {
//   errorMessage: null,
//   items: [],
//   isLoading: false
// };

export const studentsReducer=
createReducer( 
  initialState,
  on(retrieveStudentList, (_, action) => ({
    ...initialState,
    studentsa:action.students
  })),
  );






  // on(retrieveStudentList, (_, action) => ({
  //   initialState:[]
  // }))