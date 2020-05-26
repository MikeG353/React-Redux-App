import axios from 'axios'

export const GET_FILM_START = 'GET_FILM_START'
export const GET_FILM_SUCCESS = 'GET_FILM_START'
export const GET_FILM_FAIL = 'GET_FILM_START'

export const getFilmInfo = () => dispatch => {
    dispatch({ type: GET_FILM_START });
    axios
        .get('https://ghibliapi.herokuapp.com/films') 
        // I want the pictures to generate the link to the correct movie.
        .then(res => 
            dispatch({ type: GET_FILM_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_FILM_FAIL, payload: err }))
}