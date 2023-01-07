export interface IProps {
    totalPages: number
    currentPage: number

    whenChangePage: (page: number) => void
}