import React from 'react';

//Image
import formImg from '../../image/authentication.svg';
import SignUpForm from '../signupform/SignUpForm';

const Form = () => {
    return (
        <div className="form__container">
            <div className="form__img">
                <img src={formImg} alt="Authentication" />
            </div>
            <div className="form__content">
                <SignUpForm />
            </div>
        </div>
    );
};

export default Form;