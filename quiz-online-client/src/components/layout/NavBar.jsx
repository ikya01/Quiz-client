import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
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
                {isLoggedIn ? (
                    <div className="navbar-nav ml-auto">
                        <span className="navbar-text" style={{ fontSize: "18px" }}>{username}</span>
                        <div style={{ marginRight: "10px" }}></div> {/* Ajoute de l'espace */}
                        <NavLink className="navbar-brand" to={"/"} onClick={handleLogout}>Logout</NavLink>
                    </div>
                ) : (
                    <NavLink className="navbar-brand" to={"/"}>
                        Login
                    </NavLink>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
