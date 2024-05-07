import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const username = localStorage.getItem("username");
        if (username) {
            setIsLoggedIn(true);
            setUsername(username);
        } else {
            setIsLoggedIn(false);
            setUsername("");
        }
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem("username");
        setIsLoggedIn(false);
        setUsername("");
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 shadow fixed-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={"/"}>
                    QuizStar
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/quiz-stepper"}>
                                Take Quiz
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/all-quizzes"}>
                                List Questions
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto"> {/* Utilisation de la classe ms-auto pour aligner à droite */}
                        {isLoggedIn ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">{username}</span>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/"}>
                                    Login
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
