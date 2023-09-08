import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("Username required").trim(),
  email: Yup.string().email("Invalid email").required("Email required").trim(),
  password: Yup.string()
    .required("Password required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,}$/,
      "Invalid password"
    )
    .trim(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match")
    .required("Confirm password"),
});
