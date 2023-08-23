import * as Yup from "yup";

export const changePasswordSchema = (password: string) =>
  Yup.object().shape({
    oldPassword: Yup.string()
      .required("Old Password Richiesta")
      .trim()
      .oneOf([password], "password errata"),
    newPassword: Yup.string()
      .required("New Password Richiesta")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Password non valida"
      )
      .trim(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Le password devono coincidere")
      .required("Conferma la password")
      .trim(),
  });
