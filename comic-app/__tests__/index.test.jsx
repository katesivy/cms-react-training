import { cleanup, getByTestId, render, screen, waitForElement } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom';
global.fetch = require('jest-fetch-mock')

afterEach(() => {
    cleanup();
    console.error.mockClear();
})

console.error = jest.fn();



const comics = {
    // data: {
        // results: [
            // {
                title: "Ant-Man"
            // }
        // ]
    // }/
}

describe('Home', async () => {
    it('renders', () => {
        // fetch.mockResponseOnce(JSON.stringify(comics));
        render(<Home />)
    // const resp = {data: comics};
    // fetch.mockResolvedValue(resp);
  
    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))
  
    // return comics.all().then(data => expect(data).toEqual(comics));
    
    // const { debug, getByTestId } = render(<Home /> )
   
    
    // expect(getByTestId('loading')).toBeTruthy()
    // expect(comics).toEqual('Ant-Man')

    // await waitForElement(() => getByText('test title'))
    // debug();
    // expect(console.error).toHaveBeenCalled();
    })
});