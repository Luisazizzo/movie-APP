import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { changePass } from "../../../../../store/reduxSlices/userSlice/usersSlice";
import {
  IChangePasswordProps,
  IFormValuesChangePassword,
} from "../../../../../interface";

const useHandleOnSubmitChangePass = ({ closeModal }: IChangePasswordProps) => {
  const dispatch = useDispatch();
  const handleOnSubmitChangePassForm = useCallback(
    (values: IFormValuesChangePassword) => {
      dispatch(changePass(values.confirmPassword));
      closeModal();
    },
    [closeModal, dispatch]
  );
  return handleOnSubmitChangePassForm;
};
export default useHandleOnSubmitChangePass;
