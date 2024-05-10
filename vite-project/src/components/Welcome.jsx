import React, { useEffect, useState } from "react";
import "./Welcome.css";
import TodoSVG from "../assets/todo-svg.svg";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.jsx";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/homepage");
      }
    });
  }, []);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/homepage"))
      .catch((err) => alert(err.message));
  };

  const handleRegister = () => {
    if (registerInformation.email !== registerInformation.confirmEmail) {
      alert("Email does not match confirm Email");
      return;
    } else if (
      registerInformation.password !== registerInformation.confirmPassword
    ) {
      alert("Password and confirm Password does not match");
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      registerInformation.email,
      registerInformation.password
    )
      .then(() => navigate("/homepage"))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="welcome">
      <div className="todo-img-logo">
        <img src={TodoSVG} className="todo-svg" alt="Todo Logo" />
      </div>
      <div className="heading-and-login-container">
        <h1 className="welcome-heading">Todo-App</h1>
        <div className="login-register-container">
          {isRegistering ? (
            <>
              <input
                type="text"
                placeholder="Email"
                value={registerInformation.email}
                onChange={(e) =>
                  setRegisterInformation({
                    ...registerInformation,
                    email: e.target.value,
                  })
                }
              />
              <input
                type="text"
                value={registerInformation.confirmEmail}
                placeholder="Confirm Email"
                onChange={(e) =>
                  setRegisterInformation({
                    ...registerInformation,
                    confirmEmail: e.target.value,
                  })
                }
              />
              <input
                type="password"
                placeholder="Password"
                value={registerInformation.password}
                onChange={(e) =>
                  setRegisterInformation({
                    ...registerInformation,
                    password: e.target.value,
                  })
                }
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={registerInformation.confirmPassword}
                onChange={(e) =>
                  setRegisterInformation({
                    ...registerInformation,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <button
                className="sign-in-register-button"
                onClick={handleRegister}
              >
                Register
              </button>
              <button
                className="create-account-button"
                onClick={() => setIsRegistering(false)}
              >
                Go Back
              </button>
            </>
          ) : (
            <>
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="sign-in-register-button"
                onClick={handleSignIn}
              >
                Sign In
              </button>
              <button
                className="create-account-button"
                onClick={() => setIsRegistering(true)}
              >
                Create an account
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
