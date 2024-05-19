import { baseService } from "../services/baseService";

export const getStudentsAPI = async () => {
  try {
    const response = await baseService.get("/students");
    return response.data;
  } catch (error) {
    console.error("getStudents error:", error);
  }
};

export const postStudentAPI = async (newStudent) => {
  try {
    const response = await baseService.post("/students", newStudent);
    return response.data;
  } catch (error) {
    console.error("postStudent error:", error);
  }
};

export const deleteStudentAPI = async (studentId) => {
  try {
    const response = await baseService.delete(`/students/${studentId}`);
    if (response.status !== 200) {
      throw new Error("Student could not be deleted");
    }
    return response.data;
  } catch (error) {
    console.error("deleteStudent error:", error);
  }
};

export const getStudentById = async (studentId) => {
  try {
    const response = await baseService.get(`/students/${studentId}`);
    return response.data;
  } catch (error) {
    console.error("getStudentById error: ", error);
  }
};
