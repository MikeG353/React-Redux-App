import {
    GET_FILM_START,
    GET_FILM_SUCCESS,
    GET_FILM_FAIL
} from '../actions'


// initial state
const initialState = {
    film: [],
    error:'',
    isFetching: false
}
// switch case tree
function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_FILM_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case GET_FILM_SUCCESS:
            return {
                ...state,
                film: action.payload,
                error: ''
            }
        case GET_FILM_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer