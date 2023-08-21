import './AboutMe.css';
import avatar from '../../image/photo.jpg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="section-title">Студент</h2>
        <div className="about-me__bio">
          <img
            className="about-me__image"
            src={avatar}
            alt="фотография студента"
          ></img>
          <div className="about-me__bio-info">
            <h3 className="about-me__name">Наталья</h3>
            <p className="about-me__age">Фронтенд-разработчик, 39 лет</p>
            <p className="about-me__text">
             Я родилась и училась в Перми. Закончив универститет по специальности "Менеджмент организации", вышла замуж и переехала в Петербург. Работала несеолько лет по специальности. Потом появились дети. Теперь я многодетная мама. Увлекаюсь танцами, фитнессом, фотографией. После декретных отпусков решила кардинально поменять сферу деятельности и пошла учиться в Яндекс Практикум на веб-разработчика.
            </p>
            <a
              href="https://github.com/Iuzhakova-Natalia"
              target="_blank"
              rel="noreferrer"
              className="about-me__social-link"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;