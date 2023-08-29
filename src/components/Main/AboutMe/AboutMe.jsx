import { Link } from "react-router-dom";
import "./AboutMe.css";
import photo from "./../../../images/photo.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h3 className="about-me__name-section">Студент</h3>
        <div className="about-me__wrapper">
          <div className="about-me__info">
            <div>
              <h4 className="about-me__name">Наталья</h4>
              <p className="about-me__job">Фронтенд-разработчик, 39 лет</p>
              <p className="about-me__about">
                Я родилась и училась в Перми. Закончив универститет по
                специальности "Менеджмент организации", вышла замуж и переехала
                в Петербург. Работала несеолько лет по специальности. Потом
                появились дети. Теперь я многодетная мама. Увлекаюсь танцами,
                фотографией. После декретных отпусков решила кардинально
                поменять сферу деятельности и пошла учиться в Яндекс Практикум
                на веб-разработчика.
              </p>
            </div>
            <div>
              <Link
                className="about-me__link"
                target="_blank"
                to={"https://github.com/Iuzhakova-Natalia"}
              >
                Github
              </Link>
            </div>
          </div>
          <div>
            <img className="about-me__photo" src={photo} alt="Фотография" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
