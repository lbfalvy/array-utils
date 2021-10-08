import { applyWithCache, Apply } from "../src/applyWithCache"

let input: number[]
let map: jest.Mock<number, [number]>
let apply: Apply<number, number>
beforeEach(() => {
    input = [1, 2, 3, 4, 5]
    map = jest.fn(x => 2*x)
    apply = applyWithCache(map)
})

test('returns the mapped value', () => {
    const result = apply(input)
    expect(result).toEqual([2, 4, 6, 8, 10])
    expect(map).toHaveBeenCalledTimes(5)
})

test('After first run, executes only on changed values', () => {
    apply(input)
    const input2 = [1, 2, 3, 7, 5]
    const result2 = apply(input2)
    expect(result2).toEqual([2, 4, 6, 14, 10])
    expect(map).toHaveBeenCalledTimes(6)
})

test('Forgets values on end of input', () => {
    apply(input)
    const input2 = [1, 2, 3, 4]
    apply(input2)
    console.log(apply.export())
    expect(map).toHaveBeenCalledTimes(5)
    const input3 = [1, 2, 3, 4, 5]
    apply(input3)
    expect(map).toHaveBeenCalledTimes(6)
})