import React, { useState } from 'react';
import useForm from '../../hook/useForm';

const SignUpForm = () => {

    const { values, focus, changeHandler, addFocus, removeFocus, submitHandler } = useForm();

    return (
        <form onSubmit={submitHandler} className="form">
            <div className={!(focus.username) ? "form__field" : "form__field focus"}>
                <div className={!(focus.username) ? "form__icon" : "form__icon focus"}>
                    <i class='bx bx-user-circle'></i>
                </div>
                <div className="form__input-div">
                    <label className={!(focus.username) ? "form__label" : "form__label focus"}>Username</label>
                    <input type="text" name="username" value={values.username} className="form__input" onChange={changeHandler} onFocus={addFocus} onBlur={removeFocus} />
                </div>
            </div>
            <div className={!(focus.email) ? "form__field" : "form__field focus"}>
                <div className={!(focus.email) ? "form__icon" : "form__icon focus"}>
                    <i class='bx bx-at'></i>
                </div>
                <div className="form__input-div">
                    <label className={!(focus.email) ? "form__label" : "form__label focus"}>Email</label>
                    <input type="text" name="email" value={values.email} className="form__input" onChange={changeHandler} onFocus={addFocus} onBlur={removeFocus} />
                </div>
            </div>
            <div className={!(focus.password) ? "form__field" : "form__field focus"}>
                <div className={!(focus.password) ? "form__icon" : "form__icon focus"}>
                <i class='bx bx-lock-alt login__icon'></i>
                </div>
                <div className="form__input-div">
                    <label className={!(focus.password) ? "form__label" : "form__label focus"}>Password</label>
                    <input type="text" name="password" value={values.password} className="form__input" onChange={changeHandler} onFocus={addFocus} onBlur={removeFocus} />
                </div>
            </div>
            <div className={!(focus.confirmPassword) ? "form__field" : "form__field focus"}>
                <div className={!(focus.confirmPassword) ? "form__icon" : "form__icon focus"}>
                    <i class='bx bx-lock-alt login__icon'></i>
                </div>
                <div className="form__input-div">
                    <label className={!(focus.confirmPassword) ? "form__label" : "form__label focus"}>confirmPassword</label>
                    <input type="text" name="confirmPassword" value={values.confirmPassword} className="form__input" onChange={changeHandler} onFocus={addFocus} onBlur={removeFocus} />
                </div>
            </div>
            <button type="submit" className="form__btn">Sign Up</button>
            <p className="logInLink">
                Already have an account? Sign in<a href="#">here</a>
            </p>
        </form>
    );
};

export default SignUpForm;