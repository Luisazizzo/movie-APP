/* eslint-disable jsx-a11y/no-redundant-roles */
import styles from "./styles.module.scss";
import { Formik } from "formik";
import { IFormValuesSignup } from "../../../interface";
import { SignUpSchema } from "./utils/validationSchema";
import useHandleOnSubmitSignUp from "./utils/hooks/useHandleOnSubmitSignUp";

const SignUp = () => {
  const handleOnSubmitSinUpForm = useHandleOnSubmitSignUp();

  const initialValues: IFormValuesSignup = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isLogged: false,
  };
  return (
    <div className={styles.SignUp}>
      <h3 data-testid="ComponentTitle">Sign Up</h3>

      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        validateOnMount
        isInitialValid={false}
        onSubmit={handleOnSubmitSinUpForm}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
        }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="username"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              role="textbox"
            />
            {touched.username && errors.username}
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              role="textbox"
            />
            {touched.email && errors.email}
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              role="textbox"
            />
            {touched.password && errors.password}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Conferma Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              role="textbox"
            />
            {touched.confirmPassword && errors.confirmPassword}
            <button type="submit" disabled={!isValid}>
              Sign Up
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
