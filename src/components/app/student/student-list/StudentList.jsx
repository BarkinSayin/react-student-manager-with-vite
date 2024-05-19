import { useContext } from "react";
import StudentCard from "../student-card/StudentCard";
import propTypes, { func } from "prop-types";
import { StudentContext } from "../../../../contexts/student/StudentContext";

const StudentList = () => {
  const { studentList, isLoading } = useContext(StudentContext);
  return (
    <div className="student-list-container">
      <h2>Students</h2>
      <div className="student-list">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          studentList.map((student) => (
            <StudentCard student={student} key={student.id} />
          ))
        )}
      </div>
    </div>
  );
};

StudentList.propTypes = {
  studentList: propTypes.arrayOf(propTypes.object),
  deleteStudent: func,
};
export default StudentList;
