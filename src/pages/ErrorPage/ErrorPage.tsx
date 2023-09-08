import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { EnumRoutes } from "../../constants/enumRoutes";

const ErrorPage = () => {
  return (
    <div className={styles.Error}>
      <div className={styles.overlay}></div>
      <img
        src="https://www.doctoros.it/wp-content/uploads/2017/05/errore.jpg"
        alt="error"
      />
      <div className={styles.descriptionError}>
        <h2 className={styles.error404}>Error 404</h2>
        <h2>Ops!! The page was not found</h2>
        <Link to={EnumRoutes.HOME}>
          <button>Return to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
