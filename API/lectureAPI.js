import axios from 'axios';
import { URL } from './apiURLs';


export const createLecture = (course, topic, description, schedule, link, teacher_id) => {
    const body = { course, topic, description, schedule, link , teacher_id}

    return axios.post(URL.createLecture, body)
}

export const getLecture = () => {
    return axios.get(URL.getLecture)
}


export const enrollLecture = (userId, lectureId) => {
    const body = { userId, lectureId }
    return axios.post(URL.enrollLecture, body)
}

export const getMyLectures = (id) => {
    return axios.get(`${URL.myLecture}/${id}`)
}

export const searchLectures = (query) => {
    return axios.get(`${URL.searchLecture}/${query}`)
}

