import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}




const tmdbApi = {
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    nowPlaying: (params) => {
        const url = 'movie/now_playing?';
        return axiosClient.get(url, params);
    },
    genres: (params) => {
        const url = 'genre/movie/list'
        return axiosClient.get(url, params)
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params: {}});
    },
    search: (params, query, id ) => {
        const url = 'search/movie?' + 'api_key=5b49a363432f2c7c8313eea227c49945' + '&query=' + query;
        return axiosClient.get(url);
    },
    detail: (cate, id, params) => {
        const url =  'movie/' + id;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
}

export default tmdbApi;