import React, { useState } from 'react';
import { AddCategorie } from './components/AddCategorie';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = ( ) => {
    
        const [ categories , setCategories ] = useState(['One Punch']);


        // const handlAdd = () => {

        //     const add = 'Naruto';

        //     setCategories( [ ...categories , add ] );
        // }

        return (
            <>

                <h1>GifExpertApp</h1>
                <hr />

                <AddCategorie setCategories = { setCategories } />

                {/* <button onClick= { handlAdd }>
                    Agregar
                </button> */}

                <ol>
                    {
                        categories.map( c => (
                            <GifGrid
                                    key      = { c } 
                                    category = { c } 
                                    
                                    />
                        ))
                    }
                </ol>
            </>
        );
};


export default GifExpertApp;