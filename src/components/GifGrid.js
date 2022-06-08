import React from 'react';
import PropTypes from 'prop-types';

import { useGifFetch } from '../hooks/useGifFetch';
import { ViewImage } from './ViewImage';

export const GifGrid =  ( { category } ) => {

    
    const { loading , data : images } = useGifFetch( category );



    
    

    return (
        <>
        <h3> { category } </h3>
        { loading && <p>Cargando...</p> }
        <div className = "card-grid animate__animated animate__fadeIn">
            
                {
                    images.map(  img  => (
                        <ViewImage 
                                    key = { img.id }
                                    { ...img } />
                    ) )
                }
            
        </div>
        </>
    );
}


GifGrid.propTypes = {
    category : PropTypes.string.isRequired
}