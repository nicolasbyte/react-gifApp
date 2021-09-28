import React from 'react';
import { useGifFetch } from '../hooks/useGifFetch';
import { ViewImage } from './ViewImage';

export const GifGrid =  ( { category } ) => {

    
    const { loading , data : images } = useGifFetch( category );



    
    

    return (
        <>
        <h3> { category } </h3>
        { loading && 'Cargando...' }
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
