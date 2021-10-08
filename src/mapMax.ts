function mapMaxImpl<T>(array: ReadonlyArray<T>, map: (v: T) => number): [T, number] {
    let max = array[0]
    let maxValue = map(max)
    let maxIndex = 0
    for (let i = 1; i < array.length; i++) {
        const entry = array[i]
        const value = map(entry)
        if (maxValue < value) {
            max = entry
            maxValue = value
            maxIndex = i
        }
    }
    return [max, maxIndex]
}

export const mapMax = <T>(array: ReadonlyArray<T>, map: (v: T) => number): T => mapMaxImpl(array, map)[0]
export const mapMaxIndex = <T>(array: ReadonlyArray<T>, map: (v: T) => number): number => mapMaxImpl(array, map)[1]