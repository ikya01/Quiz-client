import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import QuizStepper from "./components/quiz/QuizStepper"
import Quiz from "./components/quiz/Quiz"
import QuizResult from "./components/quiz/QuizResult"
import GetAllQuiz from "./components/quiz/GetAllQuiz"
import AddQuestion from "./components/question/AddQuestion"
import UpdateQuestion from "./components/question/UpdateQuestion"
import Navbar from "./components/layout/NavBar"
import Admin from "./components/Admin"
import Register from "./components/Register"
import Login from "./components/login"
import CourseForm  from "./components/Course/CourseForm"
import CourseWithVideo from "./components/Course/CourseWithVideo"
import Dashboard from "./components/Dashboard"







function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("username"));

  const handleLogout = () => {
    // Supprimer les informations de connexion de localStorage
    localStorage.removeItem("username");
    // Mettre à jour l'état de connexion
    setIsLoggedIn(false);
  };

  return (
    <Router>
      
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/quiz-stepper" element={<QuizStepper />} />
        <Route path="/take-quiz" element={<Quiz />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dash" element={<Dashboard />} />
       
        <Route path="/create-quiz" element={<AddQuestion />} />
        <Route path="/update-quiz/:id" element={<UpdateQuestion />} />
        <Route path="/all-quizzes" element={<GetAllQuiz />} />
        <Route path="/quiz-result" element={<QuizResult />} />
        <Route path="/course-form" element={<CourseForm />} />
        <Route path="/course-video" element={<CourseWithVideo />} />
      
       
      </Routes>
    </Router>
  );
}

export default App;
