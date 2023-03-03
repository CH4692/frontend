import React from "react";
import "./Form.css";
import bgImg from "../../assets/bg-img.jpg";
import { useForm } from "react-hook-form";
import "./Input.css";
import { FaCheckCircle } from "react-icons/fa";
import { VscError } from "react-icons/vsc";

// Ziel: User Autentifizierung, damit man sich sein Applikation , vor ungewollten Zugriffen schützen kann
// Problem: Sicheres Passwort, Man darf erst die Applikation betreten wenn man sich autentifiziert hat
// Lösung: Registrieren mit starkem Passwort ()

// Ziel:
// Problem: Wo hattet ihr Probleme ? Allgemeines Problem ?
// Lösung: Wie hast du die Probleme die du hattest gelöst ?

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(data);
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

            <label>Email</label>
            <div className="input-div">
              <input
                type="email"
                {...register("Email", {
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
                {...register("Password", {
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
                {...register("ConfirmPassword", {
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
