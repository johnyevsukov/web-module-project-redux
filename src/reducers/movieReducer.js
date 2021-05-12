import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            console.log('hello')
            console.log(action.payload)
            console.log(movies)
            return {
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id)),
                appTitle: "IMDB Movie Database"
            }
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, {...action.payload, id: Date.now()}]
            }
        default:
            return state;
    }
}

export default reducer;