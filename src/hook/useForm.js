import { useEffect, useState } from "react";

const useForm = (validation) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const [focus, setFocus] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  useEffect(() => {
    setErrors(validation(values));
  }, [values, focus, validation]);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const addFocus = (event) => {
    const { name } = event.target;
    setFocus({ ...focus, [name]: true });
  };

  const removeFocus = (event) => {
    const { name } = event.target;
    if (!values[name]) {
      setFocus({ ...focus, [name]: false });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return {
    values,
    errors,
    focus,
    changeHandler,
    addFocus,
    removeFocus,
    submitHandler,
  };
};

export default useForm;
