export function fetchNavLinks({commit}) {
    //todo реализовать при апи
    const result = []
    result?.length ?
        commit('SET_NAV_LINKS', result) :
        console.warn('fetchNavLinks error')
}