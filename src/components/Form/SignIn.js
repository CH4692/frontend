import React from "react";
import bgImg from "../../assets/bg-img.jpg";
import { useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";
import { VscError } from "react-icons/vsc";
import axios from "axios";
import "./Form.css";
import "./Input.css";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const user = await axios.post("http://localhost:8080/api/v1/auth", data);
      setUser(user.data);
      const { role } = user.data;
      if (role === "ADMIN") {
        navigate("/admin");
      } else if (role === "USER") {
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
            <h2>Anmelden</h2>
            <p>Melde dich mit deinem Account an</p>
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
            <button className="btn">Submit</button>
            <div className="form-change-container">
              <p className="form-change">Kein Account? </p>
              <p
                className="form-change-link"
                onClick={() => navigate("/signup")}
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

export default SignIn;
