import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IFormValuesSignup } from "../../../../../interface";
import { EnumRoutes } from "../../../../../constants";
import { retrieveUser } from "../../../../../store/reduxSlices/usersSlice";

const useHandleOnSubmitSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnSubmitSinUpForm = useCallback(
    (values: IFormValuesSignup) => {
      const objInfoUsers = {
        username: values.username,
        email: values.email,
        password: values.password,
        isLogged: true,
      };

      dispatch(retrieveUser(objInfoUsers));
      navigate(EnumRoutes.BASE + EnumRoutes.HOME);
    },

    [dispatch, navigate]
  );
  return handleOnSubmitSinUpForm;
};
export default useHandleOnSubmitSignUp;
