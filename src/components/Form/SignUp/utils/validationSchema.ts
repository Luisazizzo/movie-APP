import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("Username richiesto").trim(),
  email: Yup.string()
    .email("Email non valida")
    .required("Email richiesta")
    .trim(),
  password: Yup.string()
    .required("Password Richiesta")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password non valida"
    )
    .trim(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Le password devono coincidere")
    .required("Conferma la password"),
});
