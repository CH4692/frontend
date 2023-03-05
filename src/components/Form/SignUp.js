import React from "react";
import bgImg from "../../assets/bg-img.jpg";
import { useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";
import { VscError } from "react-icons/vsc";
import "./Form.css";
import "./Input.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Ziel: User Autentifizierung, damit man sich sein Applikation , vor ungewollten Zugriffen schützen kann
// Problem: Sicheres Passwort, Man darf erst die Applikation betreten wenn man sich autentifiziert hat
// Lösung: Registrieren mit starkem Passwort ()

// Ziel:
// Problem: Wo hattet ihr Probleme ? Allgemeines Problem ?
// Lösung: Wie hast du die Probleme die du hattest gelöst ?

const SignUp = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { username, email, password } = data;

    const newData = {
      username,
      email,
      password,
    };
    try {
      const user = await axios.post(
        "http://localhost:8080/api/v1/register",
        newData
      );
      console.log({ username, email, password });
      console.log(user.data);
      setUser(user.data);
      const { success } = user.data;
      if (success) {
        navigate("/user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card">
          <div className="img-conti">
            <img src={bgImg} alt="Background" />
          </div>
          <div className="form">
            {/* Icon comes here */}
            <h2>Registrieren</h2>
            <p>Erstelle einen neuen Account</p>

            <label>Username</label>
            <div className="input-div">
              <input
                type="username"
                {...register("username", {
                  required: true,
                })}
              />
              {!errors.username && <FaCheckCircle className="icon check" />}
              {errors.username && <VscError className="icon error" />}
            </div>
            <hr />

            <label>Email</label>
            <div className="input-div">
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
              />
              {!errors.Email && <FaCheckCircle className="icon check" />}
              {errors.Email && <VscError className="icon error" />}
            </div>
            <hr />
            <label>Password</label>
            <div className="input-div">
              <input
                type="password"
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                })}
              />
              {!errors.Password && <FaCheckCircle className="icon check" />}
              {errors.Password && <VscError className="icon error" />}
            </div>
            <hr />
            <label>Confirm Password</label>
            <div className="input-div">
              <input
                type="password"
                {...register("confirmPassword", {
                  required: true,
                  pattern:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                })}
              />
              {!errors.ConfirmPassword && (
                <FaCheckCircle className="icon check" />
              )}
              {errors.ConfirmPassword && <VscError className="icon error" />}
            </div>
            <hr />
            <button className="btn">Submit</button>
            <div className="form-change-container">
              <p className="form-change">Du hast einen Account? </p>
              <p
                className="form-change-link"
                onClick={() => navigate("/signin")}
              >
                SignIn
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
