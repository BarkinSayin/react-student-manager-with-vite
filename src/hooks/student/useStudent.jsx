import { useState } from "react";
import {
  deleteStudentAPI,
  getStudentsAPI,
  postStudentAPI,
} from "../../network/requests/studentRequests";

const useStudent = () => {
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getStudents = async () => {
    try {
      setIsLoading(true);
      const students = await getStudentsAPI();
      setStudentList(students);
    } catch (error) {
      console.log(error);
      throw new Error("Student could not be created");
    } finally {
      setIsLoading(false);
    }
  };

  const addStudent = async (student) => {
    try {
      setIsLoading(true);
      const newStudent = await postStudentAPI(student);
      setStudentList((prevStudentList) => [...prevStudentList, newStudent]);
    } catch (error) {
      console.log(error);
      throw new Error("Student could not be created");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteStudent = async (studentId) => {
    try {
      setIsLoading(true);
      await deleteStudentAPI(studentId);
      setStudentList((prevStudentList) => {
        return prevStudentList.filter((student) => student.id !== studentId);
      });
    } catch (error) {
      console.log(error);
      throw new Error("Student could not be deleted");
    } finally {
      setIsLoading(false);
    }
  };

  return { studentList, isLoading, getStudents, addStudent, deleteStudent };
};
export default useStudent;
