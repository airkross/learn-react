export const getPagesArray = (totalPages: number): Array<number> => {
    const pages: Array<number> = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }
    return pages
}