import * as yup from "yup";

export const bodyRequestCreateUserYup = yup.object({
  email: yup
    .string()
    .required("El email es requerido")
    .email("El email no es válido"),
  password: yup.string().required("La contraseña es requerida"),
  passwordConfirmation: yup
    .string()
    .required("La confirmación de la contraseña es requerida")
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden"),
});

export const createUserValidator = yup.object({
  body: bodyRequestCreateUserYup,
});
