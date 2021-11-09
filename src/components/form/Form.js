import React from "react";
import SignUpForm from "../signupform/SignUpForm";
import "./_form.scss";

//Image
import imgSignUp from "../../image/imgSignUp.svg";

const Form = () => {
  return (
    <div className="form__container">
      <div className="form__img">
        <img src={imgSignUp} alt="Authentication" />
      </div>
      <div className="form__content">
        <SignUpForm />
      </div>
    </div>
  );
};

export default Form;
