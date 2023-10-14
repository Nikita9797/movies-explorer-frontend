import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import PopupMenu from '../PopupMenu/PopupMenu';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import useForm from '../../hooks/useForm';
import {
  register,
  authorize,
  getUserInfo,
  clearCookies,
} from '../../utils/auth';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isHeaderVisible, setIsHeaderVisible] = React.useState(true);
  const [isFooterVisible, setIsFooterVisible] = React.useState(true);
  const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isServerError, setIsServerError] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [isNotFoundMovies, setIsNotFoundMovies] = React.useState(false);
  const [errorMessageReg, setErrorMessageReg] = React.useState('');
  const [errorMessageLogin, setErrorMessageLogin] = React.useState('');
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);
  const {resetForm} = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (loggedIn) {
      getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    mainApi
      .getInitialMovies()
      .then((res) => {
        setSavedMovies(res);
        setFoundSavedMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn]);

  React.useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('movies')) || []);
  }, []);

  React.useEffect(() => {
    handleTokenCheck();
  }, []);

  function handlePopupMenuClick() {
    setIsPopupMenuOpen(true);
  }

  function closePopup() {
    setIsPopupMenuOpen(false);
  }

  function setHeaderVisible(state) {
    setIsHeaderVisible(state);
  }

  function setFooterVisible(state) {
    setIsFooterVisible(state);
  }

  function reqMovies(keyword, checkboxFilter) {
    if (allMovies.length === 0) {
      setIsLoading(true);
      moviesApi
        .getAllMovies()
        .then((res) => {
          setIsLoading(false);
          setAllMovies(res);
          setIsServerError(false);
          localStorage.setItem('allMovies', JSON.stringify(res));
          findMovies(res, keyword, checkboxFilter);
        })
        .catch(() => setIsServerError(true))
        .finally(() => {
          setTimeout(() => setIsLoading(false), 500);
        });
    } else {
      findMovies(allMovies, keyword, checkboxFilter);
    }
  }

  function findMovies(movies, keyword, checkboxFilter) {
    if (location.pathname === '/movies') {
      localStorage.setItem('keywordMovie', keyword);
    } else {
      localStorage.setItem('keywordSavedMovie', keyword);
    }

    const foundMoviesRu = movies.filter((item) => {
      return item.nameRU.toLowerCase().includes(keyword.toLowerCase());
    });

    const foundMoviesEN = movies.filter((item) => {
      return item.nameEN.toLowerCase().includes(keyword.toLowerCase());
    });

    if (checkboxFilter) {
      setFoundShortMovies(foundMoviesRu, foundMoviesEN);
    } else {
      setFoundMovies(foundMoviesRu, foundMoviesEN);
    }
  }

  function setFoundMovies(moviesRu, moviesEn) {
    if (location.pathname === '/movies') {
      setMovies(moviesRu.concat(moviesEn));
      localStorage.setItem('movies', JSON.stringify(moviesRu.concat(moviesEn)));
    }
    if (location.pathname === '/saved-movies') {
      setFoundSavedMovies(moviesRu.concat(moviesEn));
      localStorage.setItem(
        'foundSavedMovies',
        JSON.stringify(moviesRu.concat(moviesEn))
      );
    }
    handleNotFoundMovies(moviesRu.concat(moviesEn));
  }

  function setFoundShortMovies(moviesRu, moviesEn) {
    const foundMoviesShort = moviesRu.concat(moviesEn).filter((item) => {
      return item.duration <= 40;
    });

    if (location.pathname === '/movies') {
      setMovies(foundMoviesShort);
      localStorage.setItem('movies', JSON.stringify(foundMoviesShort));
    } else {
      setFoundSavedMovies(foundMoviesShort);
      localStorage.setItem(
        'foundSavedMovies',
        JSON.stringify(foundMoviesShort)
      );
    }
    handleNotFoundMovies(foundMoviesShort);
  }

  function handleNotFoundMovies(movies) {
    if (!movies.length) {
      setIsNotFoundMovies(true);
    } else {
      setIsNotFoundMovies(false);
    }
  }

  function isSavedMovies(movie) {
    return savedMovies.some(
      (item) => item.movieId === movie.id && item.owner === currentUser._id
    );
  }

  function addNewMovie(movieId) {
    mainApi
      .addNewMovie(getMovieInfoById(movieId))
      .then((res) => {
        setSavedMovies([...foundSavedMovies, res]);
        setFoundSavedMovies([...foundSavedMovies, res]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getMovieInfoById(movieId) {
    const currentMovie = JSON.parse(localStorage.getItem('allMovies')).find(
      (item) => item.id === movieId
    );
    return currentMovie;
  }

  function handleDeleteMovie(movie) {
    const deletedCard = savedMovies.find(
      (item) =>
        item.movieId === (movie.id || movie.movieId) &&
        item.owner === currentUser._id
    );
    if (deletedCard) {
      mainApi
        .deleteMovieCard(deletedCard._id)
        .then(() => {
          const othersCards = foundSavedMovies.filter(
            (item) => item._id !== deletedCard._id
          );
          setFoundSavedMovies(othersCards);
          setSavedMovies(othersCards);
          setMovies(movies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleRegister(data) {
    register(data.name, data.email, data.password)
      .then(() => {
        handleLogin(data);
        resetForm()
        setErrorMessageReg('')
      })
      .catch((err) => {
        if (err === '409') {
          return setErrorMessageReg('Данный email уже занят');
        } else if (err === '400') {
          return setErrorMessageReg('Ошибка валидации');
        } else {
          return setErrorMessageReg('Ошибка сервера');
        }
      });
  }

  function handleLogin(data) {
    authorize(data.email, data.password)
      .then(() => {
        setLoggedIn(true);
        localStorage.setItem('loggedIn', true);
        navigate('/movies', { replace: true });
        resetForm();
        setErrorMessageLogin('');
      })
      .catch((err) => {
        if (err === '401') {
          return setErrorMessageLogin('Неверные данные');
        } else {
          return setErrorMessageLogin('Ошибка сервера');
        }
      });
  }

  const handleTokenCheck = () => {
    if (localStorage.getItem('loggedIn')) {
      getUserInfo().then((res) => {
        if (res) {
          setLoggedIn(true);
          navigate(`${location.pathname}`, { replace: true });
        }
      });
    }
  };

  function signOut() {
    clearCookies()
      .then(() => {
        navigate('/', { replace: true });
        setLoggedIn(false);
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('keywordMovie');
        localStorage.removeItem('checkboxFilter');
        localStorage.removeItem('movies');
        localStorage.removeItem('allMovies');
        localStorage.removeItem('checkboxFilterSavedMovie');
        localStorage.removeItem('keywordSavedMovie');
        localStorage.removeItem('foundSavedMovies');
        setMovies([]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='root'>
        <div className='page'>
          {isHeaderVisible && (
            <Header loggedIn={loggedIn} onPopupMenu={handlePopupMenuClick} />
          )}
          <Routes>
            <Route
              exact
              path='/'
              element={
                <Main header={setHeaderVisible} footer={setFooterVisible} />
              }
            />
            <Route
              path='/movies'
              element={
                <ProtectedRouteElement
                  element={Movies}
                  loggedIn={loggedIn}
                  isLoading={isLoading}
                  header={setHeaderVisible}
                  footer={setFooterVisible}
                  onSubmit={reqMovies}
                  movies={movies}
                  isServerError={isServerError}
                  isNotFoundMovies={isNotFoundMovies}
                  addNewMovie={addNewMovie}
                  findMovies={findMovies}
                  isSavedMovies={isSavedMovies}
                  handleDeleteMovie={handleDeleteMovie}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  header={setHeaderVisible}
                  footer={setFooterVisible}
                  foundSavedMovies={foundSavedMovies}
                  movies={savedMovies}
                  findMovies={findMovies}
                  isServerError={isServerError}
                  isNotFoundMovies={isNotFoundMovies}
                  isSavedMovies={isSavedMovies}
                  addNewMovie={addNewMovie}
                  handleDeleteMovie={handleDeleteMovie}
                />
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRouteElement
                  element={Profile}
                  loggedIn={loggedIn}
                  header={setHeaderVisible}
                  footer={setFooterVisible}
                  signOut={signOut}
                />
              }
            />
            <Route
              path='/signup'
              element={
                <Register
                  header={setHeaderVisible}
                  footer={setFooterVisible}
                  handleRegister={handleRegister}
                  errorMessage={errorMessageReg}
                />
              }
            />
            <Route
              path='/signin'
              element={
                <Login
                  header={setHeaderVisible}
                  footer={setFooterVisible}
                  handleLogin={handleLogin}
                  errorMessage={errorMessageLogin}
                />
              }
            />
            <Route
              path='*'
              element={
                <NotFoundPage
                  header={setHeaderVisible}
                  footer={setFooterVisible}
                />
              }
            />
          </Routes>
          {isFooterVisible && <Footer />}
        </div>
        <PopupMenu isOpen={isPopupMenuOpen} onClosePopup={closePopup} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
