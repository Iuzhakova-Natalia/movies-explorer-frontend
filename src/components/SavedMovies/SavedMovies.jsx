import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import SavedMoviesCardList from "./SavedMoviesCardList/SavedMoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const [toggleShort, setToggleShort] = useState(
		localStorage.getItem('toggleShort') === null
			? false
			: JSON.parse(localStorage.getItem('toggleShort'))
	);
	const isEmptyQuestion = searchQuery === '';

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

  async function removeMovie(card) {
    try {
      await api.main.deleteMovie(card._id);
      setSavedMovies((prev) => prev.filter((item) => item !== card));
    } catch (error) {
      setErrorPopup(
        "Произошла ошибка при удалении фильма. Попробуйте еще раз позднее."
      );
    }
  }



  function filterFilms(query) {

      const lowerPartOfName = query.toLowerCase();
      const isIncludes = (item) => item.toLowerCase().includes(lowerPartOfName);


    if (toggleShort) {
      const res = savedMovies.filter((movie) => movie.duration <= 40);
      return res.filter(
        (movie) => isIncludes(movie.nameRU) || isIncludes(movie.nameEN)
      );
    }
    return savedMovies.filter(
      (movie) => isIncludes(movie.nameRU) || isIncludes(movie.nameEN)
    );
  }

   

  useEffect(() => {
    localStorage.setItem('toggleShort', toggleShort )
  }, [toggleShort])


  return (
    <>
      <Header />
      <main className="saved-movies">
        <SearchForm  
        toggleShort={toggleShort}
        setToggleShort={setToggleShort}
        searchQuery={searchQuery}
        handleSubmitSearch={filterFilms}
        setForSaved={setSearchQuery}
        />

        {isLoading ? (
          <Preloader />
        ) : (
          <SavedMoviesCardList
            isLoading={isLoading}
            savedMovies={filterFilms(searchQuery)}
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

export default SavedMovies;
