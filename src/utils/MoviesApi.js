import { MOVIES_URL } from './constants';

class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getAllMovies() {
    return fetch(this._baseUrl, {
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: MOVIES_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
