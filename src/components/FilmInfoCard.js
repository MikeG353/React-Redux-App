import React from 'react';
import { connect } from 'react-redux';

const FilmInfoCard = props => {
    console.log(props)

    return (
        <>
          <h2>{props.film.title}</h2>
          <p>{props.film.description}</p>
          <p>{props.film.director}</p>
          <p>{props.film.producer}</p>
          <p>{props.film.release_date}</p>
          <p>{props.film.rt_score}</p>
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

export default connect(mapStateToProps, { })(FilmInfoCard);