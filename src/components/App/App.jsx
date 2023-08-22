import { useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import './App.css';

const App = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logOut = () => {
        setIsLoggedIn(false);
        navigate('/signin', { replace: true });
      };
    
      const logIn = (evt) => {
        evt.preventDefault();
        setIsLoggedIn(true);
        navigate('/movies', { replace: true });
      };
    
      const register = (evt) => {
        evt.preventDefault();
        navigate('/signin', { replace: true });
      };
    
      const isBurgerOpened = false;
    
      const path = useLocation().pathname;
      const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
      const footerPaths = ['/', '/movies', '/saved-movies'];
    
      const goBack = () => {
        navigate(-1);
      };
    
      return (
        <div className="app">
          {headerPaths.includes(path) && (
            <Header
              logIn={logIn}
              isLoggedIn={isLoggedIn}
              isBurgerOpened={isBurgerOpened}
            />
          )}
          <Routes>
            <Route
              path="/"
              element={<Main />}
            ></Route>
            <Route
              path="/movies"
              element={<Movies isLoggedIn={isLoggedIn} />}
            ></Route>
            <Route
              path="/saved-movies"
              element={<SavedMovies isLoggedIn={isLoggedIn} />}
            ></Route>
            <Route
              path="/profile"
              element={
                <Profile
                  isLoggedIn={isLoggedIn}
                  onClick={logOut}
                />
              }
            ></Route>
            <Route
              path="/signin"
              element={<Login logIn={logIn} />}
            ></Route>
            <Route
              path="/signup"
              element={<Register register={register} />}
            ></Route>
            <Route
              path="*"
              element={<NotFound onBack={goBack} />}
            />
          </Routes>
          {footerPaths.includes(path) && <Footer />}
        </div>
      );
    };
    
    export default App;