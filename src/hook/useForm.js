import { useState } from "react"

const useForm = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [focus, setFocus] = useState({
        username: false,
        email: false,
        password: false,
        confirmPassword: false
    });

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    }

    const addFocus = (event) => {
        const {name} = event.target;
        setFocus({...focus, [name]: true});
    }

    const removeFocus = (event) => {
        const {name} = event.target;
        if(!(values[name])) {
            setFocus({...focus, [name]: false});
        } 
    }

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return { values, focus, changeHandler, addFocus, removeFocus, submitHandler }
}

export default useForm;