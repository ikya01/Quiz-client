import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../utils/UserService";

const Register = () => {
  const [username, setUsername] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ username, nom, prenom, password });
      // Redirection vers une page de confirmation ou de connexion réussie
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Register</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="p-2">
              <div className="row">
                <div className="col-md-6">
                  <img src="https://i2.wp.com/webstockreview.net/images/literacy-clipart-writing.jpg" alt="register" style={{ width: "100%" }} />
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
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input
                      type="text"
                      id="nom"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="prenom" className="form-label">Prénom</label>
                    <input
                      type="text"
                      id="prenom"
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
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
                  <button type="submit" className="btn btn-primary">Register</button>
                  <Link to={"/"} className="btn btn-link">Already have an account? Login</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
