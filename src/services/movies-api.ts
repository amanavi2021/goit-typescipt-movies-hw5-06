import axios from "axios";

const API_KEY = "0dd8a44a838b85596fd1a072a37c7f7d";
const BASE_URL = "https://api.themoviedb.org/3/";

// type SearchParams = {
//     api_key: string;
//     page: number;
// }

async function fetchTrandingMovies () {
    const params: any = {
        api_key: API_KEY,
        page: 1
    };
    
    const searchParams: URLSearchParams = new URLSearchParams(params);

const url=`${BASE_URL}trending/movie/day?${searchParams}`;

const response = await axios.get(url);
const movies = response.data;
return movies;

};

async function fetchSearchingMovies (queryString: string) {
     const params: any = {
        api_key: API_KEY,
        page:1, 
        query: queryString

    };
    
    
    
    const searchParams = new URLSearchParams(params);
    const url: string =`${BASE_URL}search/movie?${searchParams}`;
    const response = await axios.get(url);
    const movies = response.data;
    return movies;
    
    };

async function fetchMovie (id: string) {
    const searchParams = new URLSearchParams({
        api_key: API_KEY

    });
    
    const url=`${BASE_URL}movie/${id}?${searchParams}`;
    const response = await axios.get(url);
    const movie = response.data;
    return movie;

};

async function fetchReviews(id: string) {
    const params: any = {
        api_key: API_KEY,
        page: 1

    };

    const searchParams = new URLSearchParams(params);
    const url=`${BASE_URL}movie/${id}/reviews?${searchParams}`;
    const response = await axios.get(url);
    const reviews = response.data;
    return reviews;

};

async function fetchCast (id: string) {
    const searchParams = new URLSearchParams({
        api_key: API_KEY

    });

    const url: string=`${BASE_URL}movie/${id}/credits?${searchParams}`;
    const response = await axios.get(url);
    const credits = response.data;
    return credits;

};

const api = {fetchTrandingMovies, fetchSearchingMovies, fetchMovie, fetchReviews, fetchCast};
export default api;