import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logUser } from "../../../../store/reduxSlices/userSlice/usersSlice";
import { EnumRoutes } from "../../../../constants";

const useLogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logUser(false));
    navigate(EnumRoutes.BASE);
  }, [dispatch, navigate]);
  return logOut;
};
export default useLogOut;
