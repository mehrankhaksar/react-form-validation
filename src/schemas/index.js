import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = Yup.object().shape({
  email: Yup.string().email("Please enter a valid email").required("Required"),
  age: Yup.number().integer().positive().required("Required"),
  password: Yup.string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const advanceSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  jobType: Yup.string()
    .oneOf(
      ["developer", "designer", "productManager", "other"],
      "Invalid Job Type"
    )
    .required("Required"),
  acceptedTos: Yup.boolean()
    .oneOf([true], "Please accept the terms of service")
    .required("Required"),
});
