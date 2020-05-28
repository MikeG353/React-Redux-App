import axios from 'axios'

export const GET_FILM_START = 'GET_FILM_START'
export const GET_FILM_SUCCESS = 'GET_FILM_SUCCESS'
export const GET_FILM_FAIL = 'GET_FILM_FAIL'



export const getFilmInfo = id => dispatch => {
    dispatch({ type: GET_FILM_START });
    console.log(`getFilmInfo fired with id: ${id}`)

    axios
        .get(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then(res => {
            dispatch({ type: GET_FILM_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_FILM_FAIL, payload: err }))
}