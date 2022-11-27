import axios from "axios";
import {dev} from "@/API/config";

export const routes = {
    NAV_LINKS: 'navLinks',
    SKILLS: 'skills',
    PROFILE: 'profile',
    WORKS: 'works',
    CONTACTS: 'contacts'
}


export function apiRequest(method = "GET", url, data = null) {
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

export function setTitle(title) {
    if (title) {
        document.title = title
    }
}
export const isMobile = {
    computed: {
        isMobile() {
            return this.$store.getters['GET_IS_MOBILE']
        }
    }
}