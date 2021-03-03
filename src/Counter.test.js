import React from 'react'
import {render, cleanup, fireEvent} from 'react-testing-library'
import Counter from './Counter'

afterEach(cleanup)

test('<Counter/>', () => {
    const {debug, getByTestId} = render(<Counter/>)
    const counterButton = getByTestId('counter-button')
    debug();
    // console.log(wrapper.getByText('0'));
    expect(counterButton.tagName).toBe('BUTTON');
    expect(counterButton.textContent).toBe("0");

    fireEvent.click(counterButton);

    expect(counterButton.textContent).toBe("1");

    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe("2");

    fireEvent.click(counterButton);

})
