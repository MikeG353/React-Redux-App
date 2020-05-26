import React from 'react';

import { connect } from 'react-redux';

const FilmList = props => {

    return (
        <>
            <h2>Select a movie.</h2>
            <img src="/src/images/kiki.jpg" 
            // having issues pulling images from local files. need to look this up
            alt="Kiki's Delivery Service" />

        </>
    )
}

const mapStatetoProps = state => ({
    films: state.films, // <= check this structure repeatedly
    error: state.error,
    isFetching: state.isFetching
})

export default connect(mapStatetoProps, {  })(FilmList);