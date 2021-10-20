import { createReducer,on } from "@ngrx/store";
import { AppState } from "./app.state";
import { retrieveStudentList,addStudent,updateStudent,deleteStudent, addStudentSuccess, updateStudentSuccess, deleteStudentSuccess } from "./student.action";
import { Student } from "./student.state";

export interface StudentState {
  studentSate: Student[];
}

export const initialState:StudentState={
  studentSate:[]
}

export const studentsReducer=
createReducer( 
  initialState,
  on(retrieveStudentList, (_, action) => ({
    ...initialState,
    studentSate:action.students
  })),
  // on(addStudent, (state, action) => {
  //   let student={...action.student};
  //   return{
  //     ...state,
  //     studentSate:[...state.studentSate,student],
  //   }
  // }),
  on(addStudentSuccess, (state, action) => {
    let student={...action.student};
    return{
      ...state,
      studentSate:[...state.studentSate,student],
    }
  }),
  on(updateStudentSuccess, (state, action) => {
    let student={...action.student};
    const updateStudents=state.studentSate.map((student)=>{
      return action.student.id==student.id?action.student:student;
    })
    return{
      ...state,
      studentSate:updateStudents,
    };
  }),
  on(deleteStudentSuccess, (state, action) => {
    const updateStudents=state.studentSate.filter((post)=>{
      console.log("nnnnnnnnnnnnnnn"+action.id)
      return post.id!==action.id;
    })
    return{
      ...state,
      studentSate:updateStudents,
    };
  }),
  );
  
  
  
  
  
  // on(retrieveStudentList, (_, action) => ({
  //   initialState:[]
  // }))