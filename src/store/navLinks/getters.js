export const GET_NAV_LINKS = (state) => {
    return state.navLinks
}
export const GET_NAV_LINK_BY_ID = (state) => (id) => {
    return state.navLinks.find(link => link?.id === id)
}