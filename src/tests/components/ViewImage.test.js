import React from 'react';
import { shallow } from "enzyme";
import { ViewImage } from '../../components/ViewImage';


describe('pruebas en el componente ViewImage', () => {
    
    const title = 'Un título';
    const url   = 'https://localhost/algo.com';
    
    const wrapper = shallow(<ViewImage title = { title } url = { url }  />);
    test('Fotografia del componente ViewImage', () => {


        expect( wrapper ).toMatchSnapshot();
    });


    test('El titulo debe ser un título', () => {

        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );
    });
    
    test('La imagen dee tener un src y un alt', () => {
        
        const img = wrapper.find('img');

        expect( img.prop('src')).toBe( url );
        expect( img.prop('alt')).toBe( title );

    });


    test('El div debe tener la clase animate__fadeIn', () => {
        
        const div = wrapper.find('div');

        console.log( div.prop('className'));
        
        expect( div.prop('className').includes('animate__fadeIn')).toBe( true );
    });
    
    
    
});

