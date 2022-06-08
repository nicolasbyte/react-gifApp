import React from 'react';
import PropTypes from 'prop-types';


export const ViewImage = ( { title , url } ) => {
    return (
        <div className = "card animate__animated animate__fadeIn">
                <img src = { url } alt = { title } />
                <p> { title } </p>           
        </div>
    );
};


ViewImage.propTypes = {
    title : PropTypes.string.isRequired,
    url   : PropTypes.string.isRequired
};
