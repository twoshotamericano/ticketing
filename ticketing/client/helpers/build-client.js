import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://reverse',
      headers: req?.headers,
    });
  } else {
    return axios.create({
      baseURL: '/',
    });
  }
};
