import { Dispatch, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../../../store/reduxSlices/userSlice/usersSlice";
import { EnumRoutes } from "../../../../constants";

const usePopup = (
  setOpen: Dispatch<React.SetStateAction<boolean>>,
  setConfirmLoading: Dispatch<React.SetStateAction<boolean>>
) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showPopconfirm = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleConfirmPopup = useCallback(() => {
    setConfirmLoading(true);
    dispatch(removeUser());
    navigate(EnumRoutes.BASE);
    setOpen(false);
    setConfirmLoading(false);
  }, [dispatch, navigate, setConfirmLoading, setOpen]);

  const handleCancelPopup = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  return { showPopconfirm, handleCancelPopup, handleConfirmPopup };
};
export default usePopup;
