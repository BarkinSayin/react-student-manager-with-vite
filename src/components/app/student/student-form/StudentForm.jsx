import { useContext, useReducer } from "react";
import propTypes from "prop-types";
import { StudentContext } from "../../../../contexts/student/StudentContext";
import { formReduce, initialState } from "../../../../form-reduce/formReduce";

const StudentForm = () => {
  const [state, dispatch] = useReducer(formReduce, initialState);
  const { addStudent, isLoading } = useContext(StudentContext);

  const createStudent = (event) => {
    event.preventDefault();

    const { studentName, course, instructor } = state.studentInput;
    if (!studentName || !course || !instructor) {
      dispatch({
        type: "errorStatus",
        payload: { name: "nameError", value: !studentName },
      });
      dispatch({
        type: "errorStatus",
        payload: { name: "courseError", value: !course },
      });
      dispatch({
        type: "errorStatus",
        payload: { name: "instructorError", value: !instructor },
      });
      return;
    }
    addStudent(state.studentInput);
    dispatch({ type: "resetStatus" });
  };

  const handleInput = (event) => {
    dispatch({
      type: "inputStatus",
      payload: { name: event.target.name, value: event.target.value },
    });
  };
  return (
    <form action="" className="student-form">
      <div className="student-input">
        <input
          type="text"
          placeholder="Student Name"
          name="studentName"
          value={state.studentInput.studentName}
          onChange={handleInput}
        />
        {state.errors.nameError && (
          <p className="error-text">Please enter a valid Student name</p>
        )}
      </div>
      <div className="student-input">
        <input
          type="text"
          placeholder="Course"
          name="course"
          value={state.studentInput.course}
          onChange={handleInput}
        />
        {state.errors.courseError && (
          <p className="error-text">Please enter a valid Course</p>
        )}
      </div>
      <div className="student-input">
        <input
          type="text"
          placeholder="Instructor"
          name="instructor"
          value={state.studentInput.instructor}
          onChange={handleInput}
        />
        {state.errors.instructorError && (
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
