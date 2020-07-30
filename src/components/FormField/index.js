import React from "react";
import InputField from "./components/InputField";

function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}: 
        <InputField
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default FormField;