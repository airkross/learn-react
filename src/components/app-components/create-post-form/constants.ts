import { IPostItem } from "~/App"

export const getInitialValue = (): IPostItem => {
    return {
        title: '',
        description: '',
        id: new Date().valueOf()
    }
}