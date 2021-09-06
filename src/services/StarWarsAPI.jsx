import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api/";

const get = async (endpoint) => {
    const response = await axios.get(endpoint)

    return {
        data: response.data.results
    }
};

const getFetch = async (endpoint) => {
    const response = await fetch(baseURL + endpoint);

    if(!response.ok) {
        throw new Error("Request went wrong!")
    }

    return response.json();
};

export const getPosts = async (prop, page = null) => {
    return get(`${prop}?page=${page}`);
};

export default {
    getFetch,
    getPosts
}