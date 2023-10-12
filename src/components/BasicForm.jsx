import React from "react";

import { useFormik } from "formik";
import { basicSchema } from "../schemas";

import CustomButton from "./CustomButton";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 2500));
  actions.resetForm();
};

export default function BasicForm() {
  const {
    touched,
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <form
      className="w-full space-y-2.5"
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className={`bg-[#2d3748] p-1.5 border-2 border-solid ${
            errors.email && touched.email
              ? "border-red-500"
              : "border-[#4a5568]"
          } rounded`}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <p className="text-sm text-red-500">{errors.email}</p>
        )}
      </div>
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="age" className="font-semibold">
          Age
        </label>
        <input
          id="age"
          type="number"
          onKeyDown={(e) =>
            ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
          }
          placeholder="Enter your age"
          className={`bg-[#2d3748] p-1.5 border-2 border-solid ${
            errors.age && touched.age ? "border-red-500" : "border-[#4a5568]"
          } rounded`}
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.age && touched.age && (
          <p className="text-sm text-red-500">{errors.age}</p>
        )}
      </div>
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className={`bg-[#2d3748] p-1.5 border-2 border-solid ${
            errors.password && touched.password
              ? "border-red-500"
              : "border-[#4a5568]"
          } rounded`}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <p className="text-sm text-red-500">{errors.password}</p>
        )}
      </div>
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="confirmPassword" className="font-semibold">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Enter your Confirm Password"
          className={`bg-[#2d3748] p-1.5 border-2 border-solid ${
            errors.confirmPassword && touched.confirmPassword
              ? "border-red-500"
              : "border-[#4a5568]"
          } rounded`}
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="text-sm text-red-500">{errors.confirmPassword}</p>
        )}
      </div>
      <CustomButton isSubmitting={isSubmitting} />
    </form>
  );
}
