import { shallow } from "enzyme";
import { AddCategorie } from "../../components/AddCategorie";


describe('Este es el test del componente del AddCategorie', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategorie  setCategories = { setCategories }/>);
    
    beforeEach( () => {
        
        jest.clearAllMocks();
            wrapper = shallow( <AddCategorie  setCategories = { setCategories }/>);

    })
    test('imagen del AddCAtegorie', () => {    

        expect( wrapper ).toMatchSnapshot();


    });

    test('debe cambiar la caja de texto', () => {

        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', { target : { value } }     );
        
        expect( wrapper.find('p').text().trim() ).toBe( value ); 
        
    });
    
    test('no debe dispararse la función setCategories', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        expect( setCategories ).not.toHaveBeenCalled();
    });
    
    
    test('debe llamarse el setCategories y el input ser igual a string vacio', () => {
        
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', { target : { value } }     );
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        
        
        expect( setCategories).toHaveBeenCalled();
        
        expect( wrapper.find('input').prop('value').trim() ).toBe( '' );
          
    });
    
    
    
    
});
