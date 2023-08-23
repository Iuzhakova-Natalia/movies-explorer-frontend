import { Link } from "react-router-dom";
import logo from "../../image/logo.svg";
import "./Register.css";

function Register(props) {
  return (
    <section className="register">
      <form className="register__form">
        <div className="register__container">
          <Link to={"/"}>
            <img src={logo} alt="Логотип" className="register__logo-image" />
          </Link>
          <h1 className="register__title">Добро пожаловать!</h1>
          <label className="register__form-label" htmlFor="name">
            Имя
            <input
              className="register__form-input"
              id="name"
              type="name"
              name="name"
              autoComplete="off"
              minLength="2"
              maxLength="30"
              required
              placeholder="Виталий"
            />
          </label>

          <label className="register__form-label" htmlFor="email">
            E-mail
            <input
              className="register__form-input"
              id="email"
              type="email"
              name="email"
              autoComplete="off"
              minLength="2"
              maxLength="30"
              required
              placeholder="pochta@yandex.ru"
            />
          </label>

          <label className="register__form-label" htmlFor="password">
            Пароль
            <input
              className="register__form-input"
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              minLength="2"
              maxLength="30"
              required
              placeholder="••••••••"
            />
            <span className="register__form-error">Что-то пошло не так...</span>
          </label>
        </div>
        <div className="register__wrapper">
          <button type="submit" className="register__button">
            Зарегистрироваться
          </button>
          <p className="register__question">
            Уже зарегистрированы?{" "}
            <Link to={"/signin"} className="register__link">
              Войти
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Register;
