import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EnumRoutes } from "../../../../../constants";
import { logUser } from "../../../../../store/reduxSlices/userSlice/usersSlice";

const useHandleOnSubmitLogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnSubmitLogInForm = useCallback(() => {
    dispatch(logUser(true));
    navigate(EnumRoutes.BASE + EnumRoutes.HOME);
  }, [dispatch, navigate]);
  return handleOnSubmitLogInForm;
};

export default useHandleOnSubmitLogIn;
