/**
 * @jest-environment jsdom
 */

import React from 'react';
import {describe, expect, test} from '@jest/globals';
import  Counter from './add'
import { render, cleanup } from '@testing-library/react';

// const add = (x, y) => x + y;


test('<Counter />', () => {
    const { debug, getByTestId} = render(<Counter />)

    debug();
    expect(getByTestId('counter-button').tagName).toBe('BUTTON')
    expect(getByTestId('counter-button').textContent).toBe('0')
})

// const total = (shipping, subTotal) => {
//     return '$' + add(shipping, subTotal)
// }

// test('total', () => {
//     expect(total(5, 20)).toBe('$25');
// })