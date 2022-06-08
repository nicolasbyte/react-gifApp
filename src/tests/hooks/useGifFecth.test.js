import { renderHook } from '@testing-library/react-hooks';
import { useGifFetch } from '../../hooks/useGifFetch';

describe('test para el hook de use GifFetch', () => {
    
    test('debe de ser una data [] y el loading true ', async() => {

        const { result , waitForNextUpdate} = renderHook( ( ) => useGifFetch( 'One Punch' ) );
        const { data , loading } = result.current;

        await waitForNextUpdate();
        // console.log( data , loading);
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    });

    test('debe de ser una data de 10 y el loading false ', async() => {

        const { result , waitForNextUpdate} = renderHook( ( ) => useGifFetch( 'One Punch' ) );
        await waitForNextUpdate();

        const { data , loading } = result.current;

        // console.log( data , loading);
        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    });
    
});
