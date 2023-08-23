import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { changePass } from "../../../../../store/reduxSlices/usersSlice";
import { IFormChangeProps, IFormValues } from "../../../../../interface";

const useHandleOnSubmitChangePass = ({ closeModal }: IFormChangeProps) => {
  const dispatch = useDispatch();
  const handleOnSubmitChangePassForm = useCallback(
    (values: IFormValues) => {
      dispatch(changePass(values.confirmPassword));
      closeModal();
    },
    [closeModal, dispatch]
  );
  return handleOnSubmitChangePassForm;
};
export default useHandleOnSubmitChangePass;
