import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteQuestion, getAllQuestions } from "../../../utils/QuizService";
import { FaPlus } from "react-icons/fa";

const GetAllQuiz = () => {
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isQuestionDeleted, setIsQuestionDeleted] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("username");
        if (!isLoggedIn) {
            alert("Please log in to access this page.");
            navigate("/");
        } else {
            fetchQuestions();
        }
    }, [navigate]);

    const fetchQuestions = async () => {
        try {
            const data = await getAllQuestions();
            setQuestions(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteQuestion = async (id) => {
        try {
            await deleteQuestion(id);
            setQuestions(questions.filter((question) => question.id !== id));
            setIsQuestionDeleted(true);
            setDeleteSuccess("Question deleted successfully.");
        } catch (error) {
            console.error(error);
        }
        setTimeout(() => {
            setDeleteSuccess("");
        }, 4000);
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <section className="container">
            <div className="row mt-5"></div>
            <hr />
            {isQuestionDeleted && <div className="alert alert-success">{deleteSuccess}</div>}
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Question</th>
                        <th>Choices</th>
                        <th>Correct Answer</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question, index) => (
                        <tr key={question.id}>
                            <td>{index + 1}</td>
                            <td>{question.question}</td>
                            <td>
                                <ul>
                                    {question.choices.map((choice, index) => (
                                        <li key={index}>{choice}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>{question.correctAnswers}</td>
                            <td>
                                <Link to={`/update-quiz/${question.id}`}>
                                    <button className="btn btn-sm btn-outline-warning mr-2">Edit Question</button>
                                </Link>
                                <button
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => handleDeleteQuestion(question.id)}>
                                    Delete Question
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <Link to={"/create-quiz"}>
                    <FaPlus /> Add Question
                </Link>
            </div>
        </section>
    );
};

export default GetAllQuiz;
