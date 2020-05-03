import axios from 'axios';
import { URL } from './apiURLs';


export const createLecture = (course, topic, description, schedule, link) => {
    const body = { course, topic, description, schedule, link }

    return axios.post(URL.createLecture, body)
}
