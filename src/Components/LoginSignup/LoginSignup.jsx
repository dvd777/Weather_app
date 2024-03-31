import "./LoginSignup.css";
import password_img from "../Assets/password.png";
import user_img from "../Assets/person.png";
import email_img from "../Assets/email.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function LoginSignup() {
  const [work, setWork] = useState("Sign up");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <div className="header">
        <div className="text">{work}</div>
        <div className="uline"></div>
      </div>

      <div className="inputs">
        {work === "login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_img} alt="username icon" />
            <input
              type="text"
              placeholder="name"
              name="username"
              {...register("username", { required: "username is required" })}
            />
            {errors.username && (
              <div className="text-red-500">{errors.username.message}</div>
            )}
          </div>
        )}

        <div className="input">
          <img src={email_img} alt="email icon" />
          <input
            type="email"
            placeholder="email"
            name="email"
            {...register("email", { required: "email is required" })}
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="input">
          <img src={password_img} alt="password icon" />
          <input
            type="password"
            placeholder="password"
            name="password"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "password must have 8 characters",
              },
            })}
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
        <button disabled={isSubmitting} type="submit" className="SubmitButton">
          {isSubmitting ? "loadding.." : "submit"}
        </button>
      </div>
      <div className="submitcontainer">
        <div
          className={work === "login" ? "submit gray" : "submit"}
          onClick={() => {
            setWork("Sign up");
          }}
        >
          Sign Up
        </div>
        <div
          className={work === "Sign up" ? "submit gray" : "submit"}
          onClick={() => {
            setWork("login");
          }}
        >
          Log In
        </div>
      </div>
    </form>
  );
}

export default LoginSignup;
