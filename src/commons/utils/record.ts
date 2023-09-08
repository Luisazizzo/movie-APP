import { GenresId } from "../../constants";

export const idClass: Record<GenresId, string> = {
  [GenresId.ACTION]: "#8c5261",
  [GenresId.ADVENTURE]: "#d19f9c",
  [GenresId.ANIMATION]: "#473023",
  [GenresId.COMEDY]: "#f9f871",
  [GenresId.CRIME]: "#1f1f47",
  [GenresId.DOCUMENTARY]: "#eadac5",
  [GenresId.DRAMA]: "#00c6cf",
  [GenresId.FAMILY]: "#00c6cf",
  [GenresId.HISTORY]: "#3e2a29",
  [GenresId.HORROR]: "#ff0000",
  [GenresId.MISTERY]: "#8083ff",
  [GenresId.MUSIC]: "#00c6cf",
  [GenresId.ROMANCE]: "#ff00ff",
  [GenresId.SCIENZEFICTION]: "#00a97f",
  [GenresId.THRILLER]: "#aca7cb",
  [GenresId.TVMOVIE]: "#5eecc9",
  [GenresId.WAR]: "#007d5c",
  [GenresId.WESTERN]: "#473023",
  [GenresId.FANTASY]: "#007d5c",
};
