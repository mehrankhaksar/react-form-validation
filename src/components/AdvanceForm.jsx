import React from "react";

import { Formik, Form } from "formik";
import { advanceSchema } from "../schemas";

import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import CustomButton from "./CustomButton";

async function onSubmit(values, actions) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
}

export default function AdvanceForm() {
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTos: false }}
      validationSchema={advanceSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full space-y-5">
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <CustomSelect
            label="Job"
            name="jobType"
            placeholder="Please select a job"
          >
            <option value="">Please select a job</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="productManager">Product Manager</option>
            <option value="other">Other</option>
          </CustomSelect>
          <CustomCheckbox type="checkbox" name="acceptedTos" />
          <CustomButton isSubmitting={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
}
