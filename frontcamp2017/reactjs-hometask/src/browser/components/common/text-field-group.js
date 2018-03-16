import React from 'react';

const TextFieldGroup = ({ field, value, label, error, type, onChange}) => {
    return (
        <div className="form-group">
            <label className="control-label">{label}</label>
            <input placeholder="Put your email"
                   className="form-control"
                   onChange={onChange}
                   value={value}
                   name={field}
                   type={type}
                   />
            {error && <span className="help-block">{error}</span>}
        </div>
    )
};

TextFieldGroup.defaultProps = {
    type: 'text'
};

export default TextFieldGroup;