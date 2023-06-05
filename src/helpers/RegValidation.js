import * as Yup from "yup";

export const ValidationSchema = Yup.object({
  username: Yup.string().required(),
  email: Yup.string().email("invalid email format").required(),
  password: Yup.string()
    .required()
    .min(8, "should more than 8 characters")
    .matches(/[a-z]/g, "should more contain at least 1 lowercase")
    .matches(/[A-Z]/g, "should more contain at least 1 uppercase")
    .matches(/[0-9]/g, "should more contain at least 1 number")
    .matches(/^\S*$/, "should not contain spaces"),
  agreement: Yup.bool().isTrue("field must be checked"),
  confPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Required"),
});
