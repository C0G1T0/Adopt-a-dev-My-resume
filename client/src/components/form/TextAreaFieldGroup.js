import React from "react";
import classnames from "classnames";

const TextAreaFieldGroup = ({ name, placeholder, value, error, onChange }) => {
  return (
    <div className="form-group">
      <textarea
        rows="10"
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextAreaFieldGroup;
