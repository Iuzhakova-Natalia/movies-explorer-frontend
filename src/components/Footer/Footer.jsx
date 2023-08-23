import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__wrapper">
          <p className="footer__date">© {new Date().getFullYear()}</p>
          <nav className="footer__nav">
            <Link
              target="_blank"
              className="footer__link"
              to={"https://practicum.yandex.ru/"}
            >
              Яндекс.Практикум
            </Link>
            <Link
              target="_blank"
              className="footer__link"
              to={"https://github.com/Iuzhakova-Natalia"}
            >
              GitHub
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
