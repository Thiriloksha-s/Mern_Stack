import React from "react";
import { createContext } from "react";
import Exam from "./ContextAPI/Exam";
import StudentResults from "./ContextAPI/StudentResults";
export const ResPub=createContext()
const CoE = () => {
  return (
    <ResPub.Provider value={{sgpa:"9.5 SGPA",cgpa:"9.8 CGPA"}}>
      <Exam/>
      <h1>Results published</h1>
      <StudentResults />
    </ResPub.Provider>
  );
};

export default CoE;