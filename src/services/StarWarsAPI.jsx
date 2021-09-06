import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api/";

const get = async (endpoint) => {
    const response = await axios.get(endpoint);

    return {
        results: response.data,
        starWarsData: response.data.results
    }
};

const getFetch = async (endpoint) => {
    //eslint-disable-next-line
    const response = await fetch(baseURL + endpoint);

    if(!response.ok) {
        throw new Error("Request went wrong!")
    }

    return response.json();
};

export const getPosts = async (prop, page = null) => {
    return get(`${prop}?page=${page}`);
};

//eslint-disable-next-line
export default {
    getFetch,
    getPosts
}