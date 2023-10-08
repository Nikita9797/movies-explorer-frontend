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
import { Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = React.useState(true);
  const [isFooterVisible, setIsFooterVisible] = React.useState(true);
  const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);

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
                  header={setHeaderVisible}
                  footer={setFooterVisible}
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
                />
              }
            />
            <Route
              path='/signup'
              element={
                <Register header={setHeaderVisible} footer={setFooterVisible} />
              }
            />
            <Route
              path='/signin'
              element={
                <Login header={setHeaderVisible} footer={setFooterVisible} />
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
