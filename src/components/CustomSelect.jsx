import React from "react";

import { useField } from "formik";

export default function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col space-y-1.5">
      <label className="font-semibold" htmlFor={props.name}>
        {label}
      </label>
      <select
        className={`bg-[#2d3748] p-1.5 border-2 border-solid ${
          meta.error && meta.touched ? "border-red-500" : "border-[#4a5568]"
        } rounded`}
        {...props}
        {...field}
      />
      {meta.error && meta.touched && (
        <p className="text-xs font-medium text-red-500">{meta.error}</p>
      )}
    </div>
  );
}
