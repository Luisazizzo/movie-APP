import { EnumBaseUrl, EnumSizeImage } from "../../constants";
import { Companies } from "../../interface/IGetMovieDetails";
import styles from "./styles.module.scss";

interface IImageCompaniesProps {
  comp: Companies;
}

const ImageCompanies = ({ comp }: IImageCompaniesProps) => {
  return (
    <img
      className={styles.Image}
      src={`${EnumBaseUrl.BASE_IMG}${EnumSizeImage.IMG_ORIGINAL}${comp.logo_path}`}
      alt={`${comp.name} Logo`}
    />
  );
};
export default ImageCompanies;
