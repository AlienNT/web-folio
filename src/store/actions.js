import {apiRequest, errorMessage, routes} from "@/helpers/apiHelper";
import {_get} from "@/helpers/fakeLodash";

export default {
    async fetchContacts({commit}) {
        return await universalGetRequest(commit, {
            route: routes.CONTACTS,
            errorMessage: 'fetchContacts error'
        })
    },
    async fetchNavLinks({commit}) {
        return await universalGetRequest(commit, {
            route: routes.NAV_LINKS,
            errorMessage: 'fetchNavLinks error'
        })
    },
    async fetchSkills({commit}) {
        return await universalGetRequest(commit, {
            route: routes.SKILLS,
            errorMessage: 'fetchSkills error'
        })
    },
    async fetchWorks({commit}) {
        return await universalGetRequest(commit, {
            route: routes.WORKS,
            errorMessage: 'fetchWorks error'
        })
    },
    async fetchProfile({commit}) {
        return await universalGetRequest(commit, {
            route: routes.PROFILE,
            errorMessage: 'fetchProfile error'
        })
    }

}

async function universalGetRequest(commit, config) {
    return await apiRequest('GET', config.route)
        .then(response => {
            _get(response, 'data') ?
                commit(config?.mutation || getMutation(config.route), _get(response, 'data')) :
                errorMessage(config.errorMessage, response)

            return response
        })
}
const getMutation = (routeName) => {
    return 'set' + routeName[0].toUpperCase() + routeName.slice(1)
}