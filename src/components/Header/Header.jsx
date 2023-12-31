import { Link } from "react-router-dom";
import logo from "./../../images/logo.svg";
import "./Header.css";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Header() {
  const { pathname } = useLocation();
  const headerStyle = pathname === "/" ? "header header_type_main" : "header";
  const { isAuth } = useContext(AuthContext);

  return (
    <header className={headerStyle}>
      <div className="header__container">
        <Link to={"/"} className="header__link">
          <img src={logo} alt="Логотип" className="header__logo" />
        </Link>

        {!isAuth ? (
          <div className="header__wrapper">
            <Link className="header__btn" to={"/signup"}>
              Регистрация
            </Link>
            <Link className="header__btn header__btn_populary" to={"/signin"}>
              Войти
            </Link>
          </div>
        ) : (
          <Navigation />
        )}
      </div>
    </header>
  );
}

export default Header;
