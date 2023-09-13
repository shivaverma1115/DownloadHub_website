import { GET_MOVIES_FAILED, GET_MOVIES_GETMOVIEDETAILS, GET_MOVIES_REQUEST, GET_MOVIES_SEARCHMOVIES, GET_MOVIES_SUCCESS } from "./actionType";


const initialState = {
    movies: [],
    isLoading: false,
    Serch :{} ,
    movieDetails :{} ,
    isError: false
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
        default:
            return state;
    }
}