const validation = (inputValue) => {
    const { username, email, password, confirmPassword } = inputValue;
    let errors = {};

    if(!(username.trim())) {
        errors.username = 'Username Required';
    }

    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9\-]+).([a-z]{2,8})(.[a-z]{2,8})$/;

    if(!(email)) {
        errors.email = 'Email Required';
    } else if(!(emailRegex.test(email))) {
        errors.email = 'Email address is invalid';
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if(!(password)) {
        errors.password = 'Password Required';
    } else if(!(passwordRegex.test(password))) {
        errors.password = 'Minimum eight characters, at least one letter, one number and one special character';
    }

    if(!(confirmPassword)) {
        errors.confirmPassword = 'Password Required';
    } else if(confirmPassword !== password) {
        errors.confirmPassword = "Passwords doesn't match";
    }

    return errors;
}

export default validation;