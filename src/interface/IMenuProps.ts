import { Dispatch } from "react";

export interface IMenuProps {
  isVisible: boolean;
  setIsVisible: Dispatch<React.SetStateAction<boolean>>;
}
