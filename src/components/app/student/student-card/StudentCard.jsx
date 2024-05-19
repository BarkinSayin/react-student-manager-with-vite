import propTypes, { func } from "prop-types";
import { useContext } from "react";
import { StudentContext } from "../../../../contexts/student/StudentContext";

const StudentCard = ({ student }) => {
  const { deleteStudent, isLoading } = useContext(StudentContext);
  const handleDelete = () => {
    try {
      deleteStudent(student.id);
    } catch (error) {
      console.log("StudentCard", error);
    }
  };
  return (
    <div className="student-card">
      {isLoading ? (
        <span className="btn btn-delete" aria-disabled>
          X
        </span>
      ) : (
        <span className="btn btn-delete" onClick={handleDelete}>
          X
        </span>
      )}
      <ul>
        <li>{student.studentName}</li>
        <li>{student.course}</li>
        <li>{student.instructor}</li>
      </ul>
    </div>
  );
};

StudentCard.propTypes = {
  student: propTypes.object,
  deleteStudent: func,
};
export default StudentCard;
