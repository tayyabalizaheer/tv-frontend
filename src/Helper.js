export function asset(name) {
    return process.env.REACT_APP_URL+ 'uploads/' +name;
}

export function api(endpoint) {
    return process.env.REACT_APP_API_URL + endpoint;
}