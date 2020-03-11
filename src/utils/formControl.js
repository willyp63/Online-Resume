import { useState } from "react";

const getError = (value, validators) => {
  const errorMsgs = [];
  validators.forEach(validator => errorMsgs.push(validator(value)));
  return errorMsgs.filter(msg => !!msg).join("\n");
};

export const emptyValidator = () => value =>
  value ? null : "Must not be empty";
export const minLengthValidator = min => value =>
  value.length >= min ? null : `Must be at least ${min} characters`;
  export const emailValidator = () => value =>
  !value || (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) ? null : "Invalid Email";
  
export const useFormControl = (initialValue, validators) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  const update = (newValue = null, markAsDirty = false) => {
    if (newValue !== null) {
      setValue(newValue);
    } else {
      newValue = value;
    }

    const error = isDirty || markAsDirty ? getError(newValue, validators) : "";
    setError(error);

    if (!isDirty && markAsDirty) {
      setIsDirty(true);
    }

    return error;
  };

  return [value, error, update];
};

export const validateBeforeSubmit = updaters => {
  let isValid = true;
  updaters.forEach(updater => {
    if (updater(null, true)) {
      isValid = false;
    }
  });
  return isValid;
};
