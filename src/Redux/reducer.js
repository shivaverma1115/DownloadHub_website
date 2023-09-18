import { useEffect } from "react";
import { GET_MOVIES_FAILED, GET_MOVIES_GETMOVIEDETAILS, GET_MOVIES_REQUEST, GET_MOVIES_SEARCHMOVIES, GET_MOVIES_SUCCESS, GET_TOKEN } from "./actionType";


const initialState = {
    movies: [1,2,3,4,5,6,7,8,9,10,11,12],
    isLoading: false,
    Serch :{} ,
    movieDetails :{} ,
    isError: false,
    token : ""
}


export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_MOVIES_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case GET_MOVIES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                movies: payload
            }
        }
        case GET_MOVIES_SEARCHMOVIES: {
            return {
                ...state,
                Serch: payload
            }
        }
        case GET_MOVIES_GETMOVIEDETAILS: {
            return {
                ...state,
                movieDetails: payload
            }
        }
        case GET_MOVIES_FAILED: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case GET_TOKEN: {
            return {
                ...state,
                token : payload 
            }
        }
        default:
            return state;
    }
}