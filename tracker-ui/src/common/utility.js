export const getRegistrationForm = () => {
    return {
        id: {
            value: '',
            validation: {
                required: true,
                alphanumeric: true
            },
            valid: false,
            dirty: false
        },
        idType: {
            value: '',
            validation: {
                required: true,
                dropdown: true
            },
            valid: false,
            dirty: false
        },
        firstName: {
            value: '',
            validation: {
                required: true,
                alpha: true
            },
            valid: false,
            dirty: false
        },
        lastName: {
            value: '',
            validation: {
                required: true,
                alpha: true
            },
            valid: false,
            dirty: false
        },
        phoneNumber: {
            value: '',
            validation: {
                required: true,
                numeric: true,
                length: 10
            },
            valid: false,
            dirty: false
        },
        addressLine1: {
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            dirty: false,
        },
        addressLine2: {
            value: '',
            validation: {
            },
            valid: true,
            dirty: false,
        },
        addressLine3: {
            value: '',
            validation: {
            },
            valid: true,
            dirty: false,
        },
        city: {
            value: '',
            validation: {
                required: true,
                alphaWithSpaces: true
            },
            valid: false,
            dirty: false,
        },
        state: {
            value: '',
            validation: {
                required: true,
                dropdown: true
            },
            valid: false,
            dirty: false,
        },
        zip: {
            value: '',
            validation: {
                required: true,
                numeric: true,
                length: 6
            },
            valid: false,
            dirty: false
        }
    };
}

export const checkInvalid = (field, form) => {
    let fieldObj = form[field];
    console.log()
    return !fieldObj.valid && fieldObj.dirty;
}

export const checkValidity = (value, validation) => {
    let valid = true;
    let alphaPattern = /^[a-zA-Z]+$/;
    let alphaWithSpacesPattern = /^[a-zA-Z\s]+$/;
    let alphaNumericPattern = /^[a-zA-Z0-9]+$/;
    let numericPattern = /^[0-9]+$/;
    if (validation.dropdown) {
        return true;
    }
    if (validation.required) {
        valid = valid && value.trim() !== '';
    }
    if (validation.numeric) {
        valid = valid && value.match(numericPattern);
    }
    if (validation.alphanumeric) {
        valid = valid && value.match(alphaNumericPattern);
    }
    if (validation.alpha) {
        valid = valid && value.match(alphaPattern);
    }
    if (validation.length) {
        valid = valid && value.trim().length === validation.length
    }
    if (validation.alphaWithSpaces) {
        valid = valid && value.match(alphaWithSpacesPattern);
    }
    return valid;
}

export const checkFormValidity = (form) => {
    let valid = true;
    for (let key of Object.keys(form)) {
        valid = valid && form[key].valid;
    }
    return valid;
}