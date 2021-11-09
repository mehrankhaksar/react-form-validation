import React from "react";
import useForm from "../../hook/useForm";
import validation from "../../helpers/validation";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const {
    values,
    errors,
    focus,
    changeHandler,
    addFocus,
    removeFocus,
    submitHandler,
  } = useForm(validation);

  return (
    <form onSubmit={submitHandler} className="form">
      <h1 className="form__title">Create Account</h1>
      <div className={!focus.username ? "form__field" : "form__field focus"}>
        <div className="form__input-div">
          <i class="bx bx-user form__icon"></i>

          <label
            className={!focus.username ? "form__label" : "form__label focus"}
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            value={values.username}
            className="form__input"
            onChange={changeHandler}
            onFocus={addFocus}
            onBlur={removeFocus}
          />
          {errors.username && focus.username && (
            <i class="bx bx-error-circle form__icon-error"></i>
          )}
          {errors.username && focus.username && (
            <span className="form__error">
              <i class="bx bxs-left-arrow" id="arrow__icon"></i>
              {errors.username}
            </span>
          )}
        </div>
      </div>
      <div className={!focus.email ? "form__field" : "form__field focus"}>
        <div className="form__input-div">
          <i class="bx bx-at form__icon"></i>

          <label className={!focus.email ? "form__label" : "form__label focus"}>
            Email
          </label>
          <input
            type="text"
            name="email"
            value={values.email}
            className="form__input"
            onChange={changeHandler}
            onFocus={addFocus}
            onBlur={removeFocus}
          />
          {errors.email && focus.email && (
            <i class="bx bx-error-circle form__icon-error"></i>
          )}
          {errors.email && focus.email && (
            <span className="form__error">
              <i class="bx bxs-left-arrow" id="arrow__icon"></i>
              {errors.email}
            </span>
          )}
        </div>
      </div>
      <div className={!focus.password ? "form__field" : "form__field focus"}>
        <div className="form__input-div">
          <i class="bx bx-lock-alt form__icon"></i>

          <label
            className={!focus.password ? "form__label" : "form__label focus"}
          >
            Password
          </label>
          <input
            type="text"
            name="password"
            value={values.password}
            className="form__input"
            onChange={changeHandler}
            onFocus={addFocus}
            onBlur={removeFocus}
          />
          {errors.password && focus.password && (
            <i class="bx bx-error-circle form__icon-error"></i>
          )}
          {errors.password && focus.password && (
            <span className="form__error">
              <i class="bx bxs-left-arrow" id="arrow__icon"></i>
              {errors.password}
            </span>
          )}
        </div>
      </div>
      <div
        className={!focus.confirmPassword ? "form__field" : "form__field focus"}
      >
        <div className="form__input-div">
          <i class="bx bxs-lock-alt form__icon"></i>

          <label
            className={
              !focus.confirmPassword ? "form__label" : "form__label focus"
            }
          >
            Confirm Password
          </label>
          <input
            type="text"
            name="confirmPassword"
            value={values.confirmPassword}
            className="form__input"
            onChange={changeHandler}
            onFocus={addFocus}
            onBlur={removeFocus}
          />
          {errors.confirmPassword && focus.confirmPassword && (
            <i class="bx bx-error-circle form__icon-error"></i>
          )}
          {errors.confirmPassword && focus.confirmPassword && (
            <span className="form__error">
              <i class="bx bxs-left-arrow" id="arrow__icon"></i>
              {errors.confirmPassword}
            </span>
          )}
        </div>
      </div>
      <button type="submit" className="form__btn">
        Sign Up
      </button>
      <p className="logInLink">
        Already have an account? <Link to="-sign-up">Sign In</Link>
      </p>
    </form>
  );
};

export default SignUpForm;
