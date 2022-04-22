import * as yup from "yup";

export const bodyRequestUpdateFavYup = yup.object({
  name: yup.string(),
  items: yup
    .array(
      yup.object({
        title: yup.string().required("el titulo es requerido"),
        description: yup.string().required("description es requerido"),
        link: yup.string().required("link es requerido"),
      })
    )
    .min(1, "debe agregar al menos un favorito")
    .required("debe agregar al menos un favorito"),
});

export const updateListFavsValidator = yup.object({
  body: bodyRequestUpdateFavYup,
});
