
import { GET_MOVIES_FAILED, GET_MOVIES_GETMOVIEDETAILS, GET_MOVIES_REQUEST, GET_MOVIES_SEARCHMOVIES, GET_MOVIES_SUCCESS, GET_TOKEN } from "./actionType"



export const getMoviesRequest = () => {
    return {
        type: GET_MOVIES_REQUEST,
    }
}
export const getMoviesSuccess = (payload) => {
    return {
        type: GET_MOVIES_SUCCESS,
        payload: payload
    }
}
export const searchMovies = (payload) => {
    return {
        type: GET_MOVIES_SEARCHMOVIES,
        payload: payload
    }
}
export const getToken = (payload) => {
    return {
        type: GET_TOKEN,
        payload: payload
    }
}
export const getMovieDetails = (payload) => {
    return {
        type: GET_MOVIES_GETMOVIEDETAILS,
        payload 
    }
}
export const getMoviesFailer = () => {
    return {
        type: GET_MOVIES_FAILED,
    }
}