import { MainApi } from './MainApi';
import { MoviesApi } from './MoviesApi';

export const main = new MainApi({
  baseUrl:    `http://localhost:3000`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const movies = new MoviesApi({
  baseUrl: ` https://api.nomoreparties.co/beatfilm-movies`,
});

export const api = {
  main,
  movies,
};
