import { getGifs } from "../../../helpers/GifsApi";


describe('Pruebas en el helper GifsApi', () => {
        
    test('debe traer 10 gifs', async() => {
        
           const gifs =  await getGifs('one Punch');

           expect( gifs.length ).toBe( 10 );
    });

    test('debe traer 0 gifs', async() => {
        
           const gifs =  await getGifs('');

           expect( gifs.length ).toBe( 0 );
    });


    
});
