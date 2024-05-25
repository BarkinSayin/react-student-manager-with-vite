import Header from "./components/shared/header/Header";
import "./App.css";
import StudentForm from "./components/app/student/student-form/StudentForm";
import StudentList from "./components/app/student/student-list/StudentList";
import { StudentProvider } from "./contexts/student/StudentContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/shared/landing-page/LandingPage";
import NotFoundPage from "./pages/shared/not-found-page/NotFoundPage";

function App() {
  return (
    <Router>
      <StudentProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/new" element={<StudentForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </StudentProvider>
    </Router>
  );
}

export default App;
