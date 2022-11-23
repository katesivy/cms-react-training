import React from 'react';
import {describe, expect, test} from '@jest/globals';
import  Counter from './add'
import { render, cleanup } from '@testing-library/react';


test('<Counter />', () => {
    const { debug, getByTestId} = render(<Counter />)

    debug();
    expect(getByTestId('counter-button').tagName).toBe('BUTTON')
    expect(getByTestId('counter-button').textContent).toBe('0')
})

