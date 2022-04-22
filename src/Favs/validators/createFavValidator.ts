import * as yup from "yup";

export const bodyRequestCreateFavYup = yup.object({
  name: yup.string().required("El nombre de la lista es requerido"),
});

export const createListFavsValidator = yup.object({
  body: bodyRequestCreateFavYup,
});
