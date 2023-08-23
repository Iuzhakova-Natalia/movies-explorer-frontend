const BASE_URL = "https://api.movies-backend.nomoreparties.co";
const MOVIE_API_URL = "https://api.nomoreparties.co/beatfilm-movies";

const SHORT_MOVIE_DURATION = 40;

const DEVICE_PARAMS = {
  desktop: {
    width: 917,
    cards: {
      total: 12,
      more: 3,
    },
  },
  tablet: {
    width: 583,
    cards: {
      total: 8,
      more: 2,
    },
  },
  mobile: {
    width: 583,
    cards: {
      total: 5,
      more: 2,
    },
  },
};

export { BASE_URL, MOVIE_API_URL, SHORT_MOVIE_DURATION, DEVICE_PARAMS };
