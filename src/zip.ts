/**
 * Combines two arrays into an array of tuples containing the elements from both arrays.
 * @param a first tuple elements
 * @param b second tuple elements
 * @returns array of tuples
 */
export function zip<T, U>(a: T[], b: U[]): [T, U][] {
    return a.map((v, i) => [v, b[i]] as [T, U]).slice(0, b.length)
}