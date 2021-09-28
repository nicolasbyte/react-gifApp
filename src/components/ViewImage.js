import React from 'react';

export const ViewImage = ( { title , url } ) => {
    return (
        <div className = "card animate__animated animate__fadeIn">
                <img src = { url } alt = { title } />
                <p> { title } </p>           
        </div>
    );
};
