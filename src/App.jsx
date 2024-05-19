import Header from "./components/shared/header/Header";
import "./App.css";
import StudentForm from "./components/app/student/student-form/StudentForm";
import StudentList from "./components/app/student/student-list/StudentList";
import { StudentProvider } from "./contexts/student/StudentContext";

function App() {
  return (
    <StudentProvider>
      <Header
        title={"Student Manager"}
        navElements={["Home", "Details", "Contact"]}
      />
      <main>
        <StudentForm />
        <StudentList />
      </main>
    </StudentProvider>
  );
}

export default App;
