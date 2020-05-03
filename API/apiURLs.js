import { config } from '../config';

const { baseURL } = config;

export const URL = {
  login: `${baseURL}/auth/login`,
  signup: `${baseURL}/auth/signup`
}