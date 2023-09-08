import * as Yup from "yup";

export const LogInSchema = (username: string, password: string) =>
  Yup.object().shape({
    username: Yup.string()
      .required("Username required")
      .trim()
      .oneOf([username], "wrong username"),
    password: Yup.string()
      .required("Password required")
      .trim()
      .oneOf([password], "wrong password"),
  });
