export const getPagesCount = (totalCount: number, limit: number): number => {
    return Math.ceil(totalCount / limit)
}