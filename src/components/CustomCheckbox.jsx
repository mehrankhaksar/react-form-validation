import React from "react";

import { useField } from "formik";

export default function CustomCheckbox({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center space-x-2.5">
        <input
          className={`appearance-none w-5 h-5 flex justify-center items-center bg-[#2d3748] border-2 border-solid ${
            meta.error && meta.touched ? "border-red-500" : "border-[#4a5568]"
          } rounded-full cursor-pointer checked:bg-[#4299e1] checked:border-0 checked:before:contents-[''] checked:before:w-3 checked:before:h-3 checked:before:absolute checked:before:bg-[#2d3748] checked:before:rounded-full`}
          {...props}
          {...field}
        />
        <label className="font-semibold" htmlFor={props.name}>
          I accept the terms of service
        </label>
      </div>
      {meta.error && meta.touched && (
        <p className="text-xs font-medium text-red-500">{meta.error}</p>
      )}
    </div>
  );
}
