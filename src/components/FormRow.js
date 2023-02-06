import React from "react";

const FormRow = ({ name, value, handleChange, type, labelText }) => {
  return (
    <div className="input-group">
      <label htmlFor={name} className="label">
        {labelText}
      </label>
      <input
        className="input"
        type={type}
        onChange={handleChange}
        name={name}
        value={value}
      />
    </div>
  );
};

export default FormRow;
