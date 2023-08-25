import { Dispatch } from "react";

export interface IPaginationProps {
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
  totalPages?: number;
}
