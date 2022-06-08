import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategorie = ( { setCategories } ) => {

    const [categorie, setCategorie] = useState('');

    const addHandle = ( e ) => {
        
        setCategorie( e.target.value )
    }

    const addSumbit = ( e ) => {
        e.preventDefault();

        if ( categorie.trim().length > 2) {
            
            setCategories( cat => [ categorie , ...cat ] );
            setCategorie( '' );
        }


    }
    return (
        
            <form onSubmit = { addSumbit } >
                <p> { categorie } </p>
                <input
                        type     = "text"
                        value    = { categorie }
                        onChange = { addHandle }
                    />
            </form>

    );

};


AddCategorie.propTypes = {

    setCategories : PropTypes.func.isRequired 
}
