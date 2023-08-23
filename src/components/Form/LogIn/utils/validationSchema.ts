import * as Yup from "yup";

export const LogInSchema = (username: string, password: string) =>
  Yup.object().shape({
    username: Yup.string()
      .required("Username richiesto")
      .trim()
      .oneOf([username], "username errato"),
    password: Yup.string()
      .required("Password richiesta")
      .trim()
      .oneOf([password], "password errato"),
  });
