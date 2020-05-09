import axios from 'axios';
import { URL } from './apiURLs';


export const getUserName = (id) => {
  // console.log(id)
  return axios.get(`${URL.username}/${id}/username`)
}