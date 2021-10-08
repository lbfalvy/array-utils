import { combine } from "../src/combine"

test('combine can interleave arrays', () => {
    const a = [1,    , 2,    , 3, undefined]
    const b = [ , 'a',  , 'b',  , 'c']
    expect(combine<number | string>([a, b])).toEqual([1, 'a', 2, 'b', 3, 'c'])
})

test('combine throws on undefined', () => {
    const a = [1,  ,, 2]
    const b = [ , 2,, undefined]
    expect(() => combine([a, b])).toThrow()
    expect(combine([a, b], true)).toEqual([1, 2, undefined, 2])
})