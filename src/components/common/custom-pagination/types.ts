export interface IProps {
    totalPages: number
    perPages: number

    whenChangePage: (page: number) => void
}