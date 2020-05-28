import React from 'react';
import { getFilmInfo } from '../actions'
import { connect } from 'react-redux';
import FilmInfoCard from './FilmInfoCard';




// ids of movies on page
const totoroId = "58611129-2dbc-4a81-a72f-77ddfc1b1b49";
const kikiId = "ea660b10-85c4-4ae3-8a5f-41cea3648e3e";
const mononokeId = "0440483e-ca0e-4120-8c50-4c8cd9b965d6";
const spiritedId = "dc2e6bd1-8156-4886-adff-b39e6043af0c";
const howlId = "cd3d059c-09f4-4ff3-8d63-bc765a5184fa";

const FilmList = props => {
    console.log('from FilmList', props )

    return (
        <>
            <h2>Select a movie.</h2>
            <div className="movies" >
            <img src={require('../images/kiki.jpg')}
            alt="Kiki's Delivery Service"
            width="375"
            height="600"
            onClick={e => {
                e.preventDefault()
                props.getFilmInfo(kikiId)

            }} 
            />
            <img src={require('../images/totoro.jpg')}
            alt="My Neighbor Totoro"
            width="375"
            height="600"
            onClick={e => {
                e.preventDefault()
                props.getFilmInfo(totoroId)

            }} 
            />
            <img src={require('../images/princessMononoke.jpg')}
            alt="Princess Mononoke"
            width="375"
            height="600"
            onClick={e => {
                e.preventDefault()
                props.getFilmInfo(mononokeId)

            }}
            />
            <img src={require("../images/howl'sMovingCastle.jpg")}
            alt="Howl's Moving Castle"
            width="375"
            height="600"
            onClick={e => {
                e.preventDefault()
                props.getFilmInfo(howlId)

            }} 
            />
            <img src={require('../images/spiritedAway.jpg')}
            alt="Spirited Away"
            width="375"
            height="600"
            onClick={e => {
                e.preventDefault()
                props.getFilmInfo(spiritedId)

            }}
            />
            </div>
            <FilmInfoCard />

        </>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        isFetching: state.isFetching,
        film: state.film,
        error:""
    }
}

export default connect(mapStateToProps, { getFilmInfo })(FilmList);