import { useEffect, useMemo } from "react";
import { LogIn, SignUp } from "../../components/index";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { EnumRoutes } from "../../constants/enumRoutes";

const AuthPage = () => {
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.usersSlice);

  useEffect(() => {
    if (userData.isLogged) {
      navigate(EnumRoutes.BASE + EnumRoutes.HOME);
    }
  }, [navigate, userData.isLogged]);

  const authComponents = useMemo(() => {
    if (Object.values(userData).some((value) => value)) {
      return <LogIn />;
    }
    return <SignUp />;
  }, [userData]);

  return (
    <div className={styles.Auth}>
      <h2 className={styles.title}>AuthPage</h2>
      {authComponents}
    </div>
  );
};
export default AuthPage;
