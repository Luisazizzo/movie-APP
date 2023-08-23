import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { EnumRoutes } from "../constants";

const useHandleClickCard = (item: number) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`${EnumRoutes.BASE + EnumRoutes.DETAILS}/${item}`);
  }, [item, navigate]);
  return handleClick;
};

export default useHandleClickCard;
