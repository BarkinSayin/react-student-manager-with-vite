import { createContext, useEffect } from "react";
import useStudent from "../../hooks/student/useStudent";

export const StudentContext = createContext();

// eslint-disable-next-line react/prop-types
export const StudentProvider = ({ children }) => {
  const { studentList, isLoading, getStudents, addStudent, deleteStudent } =
    useStudent();
  useEffect(() => {
    getStudents();
  }, []);

  const contextValue = {
    studentList,
    isLoading,
    getStudents,
    addStudent,
    deleteStudent,
  };
  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};
