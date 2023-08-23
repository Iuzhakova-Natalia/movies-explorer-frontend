import { Link } from "react-router-dom";
import "./AboutMe.css";
import photo from "../../image/photo.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__header">Студент</h2>

      <div className="about-me__container">
        <div className="about-me__text">
          <p className="about-me__name">Наталья</p>
          <p className="about-me__info">Фронтенд-разработчик, 39 лет</p>
          <p className="about-me__paragraph">
              Я родилась и училась в Перми. Закончив универститет по
              специальности "Менеджмент организации", вышла замуж и переехала в
              Петербург. Работала несеолько лет по специальности. Потом
              появились дети. Теперь я многодетная мама. Увлекаюсь танцами,
              фитнессом, фотографией. После декретных отпусков решила
              кардинально поменять сферу деятельности и пошла учиться в Яндекс
              Практикум на веб-разработчика.
              </p>
          <Link
            className="about-me__link"
            target="_blank"
            to={"https://github.com/Iuzhakova-Natalia"}
          >
            Github
          </Link>
        </div>
        <img
          className="about-me__photo"
          alt="Фото студента"
          src={photo}
        />
      </div>
    </section>
  );
}

export default AboutMe;