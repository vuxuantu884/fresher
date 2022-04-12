import { enumValidate } from "constant";

export const validate = (value: string | undefined) => {
  if (!(value && value.trim())) {
    return enumValidate.REQUIRED;
  }
  return undefined;
};

export const validatePassword = (value: string | undefined) => {
  const reg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (!value?.match(reg)) {
    return enumValidate.PASSWORD;
  }
  return undefined;
};

export const validateEmail = (value: string | undefined) => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!value?.toLowerCase().match(reg)) {
    return enumValidate.EMAIL;
  }
  return undefined;
};
