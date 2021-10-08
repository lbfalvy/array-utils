import { zip } from "../src/zip"

test('Zip can combine two arrays', () => {
    const a = [1, 2, 3]
    const b = ['a', 'b', 'c']
    expect(zip(a, b)).toEqual([[1, 'a'], [2, 'b'], [3, 'c']])
})