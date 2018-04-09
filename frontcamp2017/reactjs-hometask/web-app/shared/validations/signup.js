import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const validateInput = function(data) {
    let errors = {};

    if (!validator.isEmail(data.email)) {
        errors.email = 'Its should be an email';
    }

    if (validator.isEmpty(data.password)) {
        errors.password = 'The password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};

export default validateInput;