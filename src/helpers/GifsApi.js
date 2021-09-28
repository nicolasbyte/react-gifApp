

    export const getGifs = async ( category ) => {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=ewNTkw3eV7RzFU7lSxkfrVEYdWb0pPOO&q=${ encodeURI( category ) }&limit=10`;
        const resp = await fetch( url );
        const { data } = await resp.json();
        
        const Gifs = data.map( ( { id , title , images } ) => (
            {
                id,
                title,
                url : images.downsized_medium.url
    
            }
        ));



        return  Gifs;

    };