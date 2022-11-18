import axios from "axios";
import {dev, host} from "@/API/config";

export const routes = {
    NAV_LINKS: 'navLinks',
    SKILLS: 'skills',
    PROFILE: 'profile',
    WORKS: 'works',
    CONTACTS: 'contacts'
}


export function apiRequest(method = "GET", url, data = null) {
    axios.defaults.baseURL = host

    return axios({
        method,
        url,
        data,
    })
}

export function checkObjectFields(object) {
    return Object.keys(object).every(key => object[key])
}

export function errorMessage(message, response) {
    dev.warn(`${message}${response?.status ? `: ${response.status}` : ''}`)
}