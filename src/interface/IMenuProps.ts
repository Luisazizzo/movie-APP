import { Dispatch } from "react";

export interface IMenuProps {
  menu: boolean;
  setMenu: Dispatch<React.SetStateAction<boolean>>;
}
