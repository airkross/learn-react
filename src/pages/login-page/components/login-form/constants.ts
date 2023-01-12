import { IInitialValues } from "./types"

export const getInitialValue = (): IInitialValues => {
    return {
        login: '',
        password: '',
    }
}