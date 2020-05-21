import axios from 'axios';
import { URL } from './apiURLs';


export const getChatList = (id) => {
  // console.log(id)
  return axios.get(`${URL.chat}/${id}/chatlist`)
}

export const getMessages = (id, user_id) => {
  return axios.get(`${URL.chat}/${id}/${user_id}/messages`)
}

export const createChat = (members) => {
  return axios.post(URL.chat, { members })
}

export const sendMessage = (id, body) => {
  return axios.put(`${URL.chat}/${id}/${body.message.user_id}`, body)
}