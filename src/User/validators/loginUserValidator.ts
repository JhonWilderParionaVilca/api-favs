import * as yup from "yup";

export const bodyRequestLoginUserYup = yup.object({
  email: yup
    .string()
    .required("El email es requerido")
    .email("El email no es válido"),
  password: yup.string().required("La contraseña es requerida"),
});

export const loginUserValidator = yup.object({
  body: bodyRequestLoginUserYup,
});
