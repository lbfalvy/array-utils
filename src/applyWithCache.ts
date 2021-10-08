export type Apply<T, U> =
    & ((input: ReadonlyArray<T>) => U[])
    & { export: () => [T, U][] }

/**
 * Cache lookup with fallback to map from T, also update cache
 * @param input Source values
 * @param map Mapping
 * @param cache a writable array
 * @returns Mapped values
 */
export function applyWithCache<T, U>(
    map: (v: T, index: number) => U,
    init?: [T, U][]
): Apply<T, U> {
    const cache: [T, U][] = init ? [...init] : []
    return Object.assign((input => {
        // Add to or delete from the end of cache so it's exactly input.length long
        const length = cache.length
        const goal = input.length
        const start = Math.min(length, goal)
        const deleted = Math.max(0, length - goal)
        const added = Math.max(0, goal - length)
        cache.splice(start, deleted, ...new Array(added))
        // Perform the lookup/mapping
        return input.map((t, i) => {
            let u: U
            if (cache[i] && cache[i][0] === t) u = cache[i][1]
            else u = map(t, i)
            cache[i] = [t, u]
            return u
        })
    }) as Apply<T, U>, {
        export: () => [...cache]
    })
}