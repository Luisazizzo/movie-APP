export interface IMovie {
  id: number;
  poster_path?: string;
  title: string;
  backdrop_path?: string;
  overview: string;
}

export type Movies = IMovie[];
