import { unzip } from "../src/unzip"

test('Unzip can turn an array of tuples into a tuple of arrays', () => {
    const input: [number, string][] = [[1, 'a'], [2, 'b'], [3, 'c']]
    expect(unzip(input)).toEqual([[1, 2, 3], ['a', 'b', 'c']])
})