import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('este es el test de GifExpertApp', () => {
    
    test('este es el snapshot contra el GifExpertApp', () => {
        
            const wrapper = shallow( <GifExpertApp />);

            expect( wrapper ).toMatchSnapshot();
    });


    test('debe de mostrar una lista de categorias', () => {
       
        const categories = [ 'One Punch' , 'Naruto' ];

        const wrapper = shallow( < GifExpertApp  categoriesDefault = { categories } /> );

        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
    
    
});
