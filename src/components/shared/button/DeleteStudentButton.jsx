import axios from "axios";
const DeleteStudentButton = () => {
  const deleteStudent = async (studentId) => {
    const response = await axios.delete(
      `http://localhost:5050/students/${studentId}`
    );
    console.log(response);
  };

  return (
    <span
      className="btn btn-delete"
      onClick={() => {
        deleteStudent;
      }}
    >
      X
    </span>
  );
};
export default DeleteStudentButton;
