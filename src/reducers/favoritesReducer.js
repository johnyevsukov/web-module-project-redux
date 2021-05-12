import {TOGGLE_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITES} from '../actions/favoritesActions'

const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, {...action.payload, id: Date.now()}]
            }
        case REMOVE_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default favoritesReducer;