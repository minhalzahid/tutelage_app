import { config } from '../config';

const { baseURL, proxy } = config;

export const URL = {
  login: `${baseURL}/auth/login`,
  signup: `${baseURL}/auth/signup`,
  createLecture: `${baseURL}/lecture`,
  getLecture: `${baseURL}/lecture`,
  enrollLecture: `${baseURL}/lecture/enroll`,
  chat: `${baseURL}/chat`,
  username: `${baseURL}/user`
}