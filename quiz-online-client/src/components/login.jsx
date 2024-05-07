import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../utils/UserService";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser({ username, password });
        // Stocker le nom d'utilisateur dans localStorage après la connexion réussie
        localStorage.setItem("username", username);

        // Redirection vers la page addQuestion si la connexion réussit
        navigate("/create-quiz");
    } catch (error) {
      setError("Invalid username or password.");
    }
  };
  

  
 
  return (
    <div className="container" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Login</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="p-2">
              <div className="row">
                <div className="col-md-6">
                  <img src="https://clipart-library.com/2023/earth-globe-stack-books_1308-116232.jpg" alt="login" style={{ width: "100%" }} />
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button type="submit" className="btn btn-primary">Login</button>
                  <Link to={"/register"} className="btn btn-link">Don't have an account? Register</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  
  
};

export default Login;
