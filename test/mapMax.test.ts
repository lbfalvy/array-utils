import { mapMax, mapMaxIndex } from "../src/mapMax"

test('Select longest text', () => {
    const sample = [
        'Thomas',
        'Peter',
        'Erica',
        'Ethelbert',
        'Rosie',
        'John'
    ]
    expect(mapMax(sample, s => s.length)).toBe('Ethelbert')
    expect(mapMaxIndex(sample, s => s.length)).toBe(sample.indexOf('Ethelbert'))
})