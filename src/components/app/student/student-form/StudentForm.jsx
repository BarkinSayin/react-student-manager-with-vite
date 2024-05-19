import { useContext, useState } from "react";
import propTypes from "prop-types";
import { StudentContext } from "../../../../contexts/student/StudentContext";

const StudentForm = () => {
  const [studentInput, setStudentInput] = useState({
    studentName: "",
    course: "",
    instructor: "",
  });
  const [error, setError] = useState({
    nameError: false,
    courseError: false,
    instructorError: false,
  });

  const createStudent = (event) => {
    event.preventDefault();
    setError({
      nameError: false,
      courseError: false,
      instructorError: false,
    });
    if (
      studentInput.studentName.trim() &&
      studentInput.course.trim() &&
      studentInput.instructor.trim()
    ) {
      addStudent(studentInput);
      setStudentInput({
        studentName: "",
        course: "",
        instructor: "",
      });
    } else {
      !studentInput.studentName.trim() &&
        setError((prevError) => ({ ...prevError, nameError: true }));
      !studentInput.course.trim() &&
        setError((prevError) => ({ ...prevError, courseError: true }));
      !studentInput.instructor.trim() &&
        setError((prevError) => ({ ...prevError, instructorError: true }));
    }
  };
  const { addStudent, isLoading } = useContext(StudentContext);

  return (
    <form action="" className="student-form">
      <div className="student-input">
        <input
          type="text"
          placeholder="Student Name"
          value={studentInput.studentName}
          onChange={(event) => {
            setStudentInput((prevStudentList) => ({
              ...prevStudentList,
              studentName: event.target.value,
            }));
          }}
        />
        {error.nameError && (
          <p className="error-text">Please enter a valid Student name</p>
        )}
      </div>
      <div className="student-input">
        <input
          type="text"
          placeholder="Course"
          value={studentInput.course}
          onChange={(event) =>
            setStudentInput((prevStudentList) => ({
              ...prevStudentList,
              course: event.target.value,
            }))
          }
        />
        {error.courseError && (
          <p className="error-text">Please enter a valid Course</p>
        )}
      </div>
      <div className="student-input">
        <input
          type="text"
          placeholder="Instructor"
          value={studentInput.instructor}
          onChange={(event) =>
            setStudentInput((prevStudentList) => ({
              ...prevStudentList,
              instructor: event.target.value,
            }))
          }
        />
        {error.instructorError && (
          <p className="error-text">Please enter a valid Instructor</p>
        )}
      </div>
      {isLoading ? (
        <button className="submit-button" disabled>
          Add student
        </button>
      ) : (
        <button className="submit-button" onClick={createStudent}>
          Add student
        </button>
      )}
    </form>
  );
};

StudentForm.propTypes = {
  addStudent: propTypes.func,
};
export default StudentForm;
