import { useEffect, useState } from "react";
import "./Movies.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import { api } from "../../utils/api";
import Preloader from "./Preloader/Preloader";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function Movies() {
  const [allMovies, setAllMovies] = useState(
    localStorage.getItem("allMovies") === null
      ? []
      : JSON.parse(localStorage.getItem("allMovies"))
  );
  const [movies, setMovies] = useState(
    localStorage.getItem("filteredMovies") === null
      ? []
      : JSON.parse(localStorage.getItem("filteredMovies"))
  );
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [toggleShort, setToggleShort] = useState(
    localStorage.getItem("toggleShort") === null
      ? false
      : JSON.parse(localStorage.getItem("toggleShort"))
  );

  const [isShowPopup, setIsShowPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState("");
  const isEmptyQuestion = searchQuery === "";

  useEffect(() => {
    const getSavedMovies = async () => {
      try {
        setIsLoading(true);
        const savedMoviesRes = await api.main.getInitialMovies();
        setSavedMovies(savedMoviesRes);
      } catch (error) {
        setIsShowPopup(true);
        setErrorPopup(
          "Произошла ошибка при загрузке сохранённых фильмов. Попробуйте еще раз позднее."
        );
      } finally {
        setIsLoading(false);
      }
    };
    getSavedMovies();
  }, []);

  // async function getMovies(searchQuery) {
  // 	if (searchQuery === '') return;
  // 	try {
  // 		setIsLoading(true);
  // 		const res = await api.movies.getInitialMovies();
  // 		const savedMoviesRes = await api.main.getInitialMovies();
  // 		setMovies(res);
  // 		setSavedMovies(savedMoviesRes);
  // 	} catch (error) {
  // 		setErrorPopup('Произошла ошибка при загрузке фильмов. Попробуйте еще раз позднее.');
  // 		setIsShowPopup(true);
  // 	} finally {
  // 		setIsLoading(false);
  // 	}
  // }

  async function handleOnSubmit(searchQuery, toggleShort) {
    setSearchQuery(searchQuery);
    setToggleShort(toggleShort);

    // при первом поиске фетчим все фильмы
    if (!allMovies.length) {
      try {
        setIsLoading(true);
        const res = await api.movies.getInitialMovies();
        const savedMoviesRes = await api.main.getInitialMovies();
        const filteredMovies = filterFilms(searchQuery, toggleShort, res);
        setMovies(filteredMovies);
        setAllMovies(res);
        setSavedMovies(savedMoviesRes);
        localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
        localStorage.setItem("allMovies", JSON.stringify(res));
      } catch (error) {
        setErrorPopup(
          "Произошла ошибка при загрузке фильмов. Попробуйте еще раз позднее."
        );
        setIsShowPopup(true);
      } finally {
        setIsLoading(false);
      }
    } else {
      const filteredMovies = filterFilms(searchQuery, toggleShort, allMovies);
      setMovies(filteredMovies);
      localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
    }
    localStorage.setItem("searchQuery", JSON.stringify(searchQuery));
    localStorage.setItem("toggleShort", JSON.stringify(toggleShort));
  }

  async function saveMovie(card) {
    try {
      const res = await api.main.addNewMovie(card);
      setSavedMovies((prev) => [...prev, res]);
      return res;
    } catch (error) {
      setErrorPopup(
        "Произошла ошибка при сохранении фильма. Попробуйте еще раз позднее."
      );
      setIsShowPopup(true);
    }
  }

  async function removeMovie(_id) {
    try {
      const res = await api.main.deleteMovie(_id);
      setSavedMovies((prev) => prev.filter((item) => item._id !== _id));
      return res;
    } catch (error) {
      setIsShowPopup(true);
      setErrorPopup(
        "Произошла ошибка при удалении фильма. Попробуйте еще раз позднее."
      );
    }
  }

  function filterFilms(searchQuery, toggleShort, movies) {
    const lowerPartOfName = searchQuery.toLowerCase();
    const isIncludes = (item) => item.toLowerCase().includes(lowerPartOfName);

    if (toggleShort) {
      const res = movies.filter((movie) => movie.duration <= 40);
      return res.filter(
        (movie) => isIncludes(movie.nameRU) || isIncludes(movie.nameEN)
      );
    }
    return movies.filter(
      (movie) => isIncludes(movie.nameRU) || isIncludes(movie.nameEN)
    );
  }

  useEffect(() => {
    localStorage.setItem("toggleShort", JSON.stringify(toggleShort));
  }, [toggleShort]);

  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm
          toggleShort={toggleShort}
          searchQuery={searchQuery}
          setToggleShort={setToggleShort}
          handleSubmitSearch={handleOnSubmit}
          isLoading={isLoading}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            isLoading={isLoading}
            movies={
              toggleShort
                ? movies.filter((movie) => movie.duration <= 40)
                : movies
            }
            savedMovies={savedMovies}
            saveMovie={saveMovie}
            removeMovie={removeMovie}
            isEmptyQuestion={isEmptyQuestion}
          />
        )}
      </main>
      <Footer />
      <InfoTooltip
        isOpen={isShowPopup}
        onClose={setIsShowPopup}
        infoTooltipMessage={{ error: errorPopup }}
      />
    </>
  );
}

export default Movies;
