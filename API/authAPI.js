import axios from 'axios';
import { URL } from './apiURLs';



export const login = (username, password) => {
  const body = {username ,password}
  
  return axios.post(URL.login, body)
}

export const signUp = (body) => {
  return axios.post(URL.signup, body)
}