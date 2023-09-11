import { GET_MOVIES_FAILED, GET_MOVIES_REQUEST, GET_MOVIES_SEARCHMOVIES, GET_MOVIES_SEARCHMOVIESBYBTN, GET_MOVIES_SUCCESS } from "./actionType"



export const getMoviesRequest = () =>{
    return {
        type : GET_MOVIES_REQUEST,
    }
}
export const getMoviesSuccess = (payload) =>{
    return {
        type : GET_MOVIES_SUCCESS,
        payload:payload
    }
}
export const searchMovies = (payload) =>{
    return {
        type : GET_MOVIES_SEARCHMOVIES,
        payload:payload
    }
}
export const getMoviesFailer = () =>{
    return {
        type : GET_MOVIES_FAILED,
    }
}