/* eslint-disable jsx-a11y/no-redundant-roles */
import styles from "./styles.module.scss";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { IFormValuesLogin } from "../../../interface";
import { LogInSchema } from "./utils/validationSchema";
import useHandleOnSubmitLogIn from "./utils/hooks/useHandleOnSubmitLogIn";

const LogIn = () => {
  const stateUsers = useSelector((state: RootState) => state.usersSlice);
  const handleOnSubmitLogInForm = useHandleOnSubmitLogIn();

  const initialValues: IFormValuesLogin = {
    username: "",
    password: "",
  };

  return (
    <div className={styles.LogIn}>
      <h3 data-testid="ComponentTitle">Log In</h3>

      <Formik
        initialValues={initialValues}
        validationSchema={LogInSchema(stateUsers.username, stateUsers.password)}
        validateOnMount
        isInitialValid={false}
        onSubmit={handleOnSubmitLogInForm}
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
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              role="textbox"
            />
            {touched.password && errors.password}

            <button type="submit" disabled={!isValid}>
              Log In
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LogIn;
