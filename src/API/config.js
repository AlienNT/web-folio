export const host = 'https://fake-json-server-nt.herokuapp.com'
const isDev = true

export const dev = {
    log: (message) => isDev ? console.log(message) : null,
    warn: (message) => isDev ? console.warn(message) : null,
    group: (name) => isDev ? console.group(name) : null,
    groupEnd: () => isDev ? console.groupEnd() : null
}