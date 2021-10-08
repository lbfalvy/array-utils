import { divide } from "../src/divide"

test('Basic division', () => {
    const input = [23, 61, 3, 48, 15, 54, 4, 6, 546]
    const [even, odd] = divide(input, x => x % 2 == 0)
    expect(even).toEqual([48, 54, 4, 6, 546])
    expect(odd).toEqual([23, 61, 3, 15])
})

test('Type assertion', () => {
    const input = [1, '2', 3, 4, 'foo']
    const [a, b] = divide<string, number>(input, (x): x is string => typeof x == 'string')
    expect(a).toEqual(['2', 'foo'])
    expect(b).toEqual([1, 3, 4])
})

test('Holes', () => {
    const input = [10, 22, 13, 424, 32, 54, 33, 22, 1234]
    const [a, b] = divide(input, x => x > 50, true)
    expect(a).toEqual([  ,   ,   , 424,   , 54,   ,   , 1234])
    expect(b).toEqual([10, 22, 13,    , 32,   , 33, 22, undefined])
})