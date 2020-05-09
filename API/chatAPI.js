import axios from 'axios';
import { URL } from './apiURLs';


export const getChatList = (id) => {
  // console.log(id)
  return axios.get(`${URL.chatlist}/${id}/chatlist`)
}