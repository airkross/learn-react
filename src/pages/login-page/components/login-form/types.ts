export interface IInitialValues {
    login: string
    password: string
}

export interface IProps {
    error: string
    isLoading: boolean
    whenSubmit?: (e: IInitialValues) => void
}