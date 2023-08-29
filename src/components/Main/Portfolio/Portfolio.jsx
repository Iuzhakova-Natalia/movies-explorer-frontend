import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__name-section">Портфолио</h3>
        <ul className="portfolio__nav">
          <li className="portfolio__wrapper">
            <Link
              className="portfolio__link"
              target="_blank"
              to={"https://Iuzhakova-Natalia.github.io/how-to-learn/"}
            >
              Статичный сайт
            </Link>
            <span className="portfolio__arrow">↗</span>
          </li>
          <li className="portfolio__wrapper">
            <Link
              className="portfolio__link"
              target="_blank"
              to={"https://Iuzhakova-Natalia.github.io/russian-travel/"}
            >
              Адаптивный сайт
            </Link>
            <span className="portfolio__arrow">↗</span>
          </li>
          <li className="portfolio__wrapper">
            <Link
              className="portfolio__link"
              target="_blank"
              to={"https://Iuzhakova-Natalia.github.io/mesto-react/"}
            >
              Одностраничное приложение
            </Link>
            <span className="portfolio__arrow">↗</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
