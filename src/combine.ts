export function combine<T>(arrays: (T | undefined)[][], allowUndefined?: false | null): T[]
export function combine<T>(arrays: (T | undefined)[][], allowUndefined: boolean): (T | undefined)[]
export function combine<T>(
    arrays: (T | undefined)[][],
    allowUndefined?: boolean | null
): (T | undefined)[] {
    const array = new Array(arrays[0].length)
    indices:for (let i = 0; i < arrays[0].length; i++) {
        for (let j = 0; j < arrays.length; j++) {
            const entry = arrays[j][i]
            if (entry !== undefined) {
                array[i] = entry
                continue indices;
            }
        }
        if (!allowUndefined) throw new Error('A hole in the recombined array was not patched')
    }
    return array
} 