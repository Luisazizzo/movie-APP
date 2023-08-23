import { IMovie } from "./IMovie";

export interface IGetSearch {
  page: number;
  results: IMovie[];
}
