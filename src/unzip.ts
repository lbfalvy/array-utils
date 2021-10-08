/**
 * Reverses the zip operation
 * @param zipped array of tuples
 * @returns tuple of arrays
 */
export function unzip<T, U>(zipped: [T, U][]): [T[], U[]] {
    const tv: T[] = [], uv: U[] = []
    zipped.forEach(([t, u]) => { tv.push(t); uv.push(u) })
    return [tv, uv]
}