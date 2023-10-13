//export const BASE_URL = 'http://localhost:3000';
import { MAIN_URL } from './constants';

export const register = (name, email, password) => {
  return fetch(`${MAIN_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(`${response.status}`);
  });
};

export const authorize = (email, password) => {
  return fetch(`https://api.diplomcohort-66.nomoredomainsrocks.ru/signin`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(`${response.status}`);
  });
};

export const getUserInfo = () => {
  return fetch(`${MAIN_URL}/users/me`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(`${response.status}`);
  });
};

export const clearCookies = () => {
  return fetch(`${MAIN_URL}/signout`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
