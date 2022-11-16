// import {describe, expect, test} from '@jest/globals';
// import { add } from './add'

const add = (x, y) => x + y;


test('add', () => {
    expect(add(1, 2)).toBe(3)
})

const total = (shipping, subTotal) => {
    return '$' + add(shipping, subTotal)
}

test('total', () => {
    expect(total(5, 20)).toBe('$25');
})