import * as yup from "yup";

export const signUpSchema = yup.object({
  user: yup.string().min(5).required(),
  email: yup.string().email().min(5).required(),
  password: yup.string().min(5).required(),
});

export const loginSchema = yup.object({
  user: yup.string().min(5).required(),
  password: yup.string().min(5).required(),
});
