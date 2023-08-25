import styles from "./styles.module.scss";
import { Button, Form, Input } from "antd";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import {
  IChangePasswordProps,
  IFormValuesChangePassword,
} from "../../../interface";
import useHandleOnSubmitChangePass from "./utils/hooks/useHandleOnSubmitChangePass";
import { changePasswordSchema } from "./utils/validationSchema";

const ChangePassword = ({ closeModal }: IChangePasswordProps) => {
  const stateUsers = useSelector((state: RootState) => state.usersSlice);
  const handleOnSubmitChangePassForm = useHandleOnSubmitChangePass({
    closeModal,
  });

  const initialValues: IFormValuesChangePassword = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    isInitialValid: false,
    validationSchema: changePasswordSchema(stateUsers.password),
    onSubmit: handleOnSubmitChangePassForm,
  });
  return (
    <Form
      labelCol={{ span: 8 }}
      labelAlign="left"
      wrapperCol={{ span: 16 }}
      colon={false}
      style={{ maxWidth: 600 }}
      onFinish={formik.handleSubmit}
      initialValues={formik.initialValues}
    >
      <Form.Item label="Old Password" name="oldPassword">
        <Input.Password
          value={formik.values.oldPassword}
          onChange={(e) => {
            formik.setFieldValue("oldPassword", e.target.value);
          }}
          onBlur={formik.handleBlur}
          role="textbox"
        />
      </Form.Item>
      <p className={styles.error}>
        {formik.touched.oldPassword && formik.errors.oldPassword}
      </p>
      <Form.Item label="New Password" name="newPassword">
        <Input.Password
          value={formik.values.newPassword}
          onChange={(e) => {
            formik.setFieldValue("newPassword", e.target.value);
          }}
          onBlur={formik.handleBlur}
          role="textbox"
        />
      </Form.Item>
      <p className={styles.error}>
        {formik.touched.newPassword && formik.errors.newPassword}
      </p>
      <Form.Item label="Confirm Password" name="confirmPassword">
        <Input.Password
          value={formik.errors.confirmPassword}
          onChange={(e) => {
            formik.setFieldValue("confirmPassword", e.target.value);
          }}
          onBlur={formik.handleBlur}
          role="textbox"
        />
      </Form.Item>
      <p className={styles.error}>
        {formik.touched.confirmPassword && formik.errors.confirmPassword}
      </p>

      <Form.Item label=" ">
        <Button
          disabled={!formik.isValid}
          className={styles.button}
          type="primary"
          htmlType="submit"
        >
          Confirm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ChangePassword;
