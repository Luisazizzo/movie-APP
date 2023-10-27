import * as Yup from "yup";

export const changePasswordSchema = (password: string) =>
  Yup.object().shape({
    oldPassword: Yup.string()
      .required("Old Password required")
      .trim()
      .oneOf([password], "wrong password"),
    newPassword: Yup.string()
      .required("New Password required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,}$/,
        "Invalid password",
      )
      .trim(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
      .required("Confirm password")
      .trim(),
  });
