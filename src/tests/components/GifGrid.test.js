import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useGifFetch } from "../../hooks/useGifFetch";
jest.mock('../../hooks/useGifFetch');

describe(' pruebas en el componente de GifGrid', () => {
    const category = 'One Punch';
    
    test('hacer snapshot con contra el GifGrid', () => {
        
        useGifFetch.mockReturnValue({
            data    : [],
            loading : true
        });
        const wrapper = shallow( <GifGrid  category = { category } />)
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe de traer información', () => {
        
        const data = [
            {
                id    : 'ABC',
                url   : 'htttp://localhost/cualquier/cosa',
                title : 'Cualquier Cosa'
            }
        ];
        
        useGifFetch.mockReturnValue({
            data,
            loading : false
        });
        
        const wrapper = shallow( <GifGrid  category = { category } />)
        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('ViewImage').length ).toBe( data.length );

    });
    
    
});
