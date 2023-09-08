import styles from "./styles.module.scss";
import { IFooterDetails } from "../../interface";
import { memo } from "react";
import ImageCompanies from "../ImageCompanies/ImageCompanies";

const FooterDetails = memo(({ companies }: IFooterDetails) => {
  return (
    <div className={styles.footer}>
      <h2>Production companies </h2>
      <div className={styles.company}>
        {companies?.map(
          (comp) =>
            comp.logo_path && <ImageCompanies comp={comp} key={comp.id} />
        )}
      </div>
    </div>
  );
});
export default FooterDetails;
