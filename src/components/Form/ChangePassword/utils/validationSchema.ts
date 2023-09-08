import * as Yup from "yup";

export const changePasswordSchema = (password: string) =>
  Yup.object().shape({
    oldPassword: Yup.string()
      .required("Old Password request")
      .trim()
      .oneOf([password], "wrong password"),
    newPassword: Yup.string()
      .required("New Password request")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Invalid password"
      )
      .trim(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
      .required("Confirm password")
      .trim(),
  });
