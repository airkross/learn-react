import { IPostItem } from "~/api/bff/post-bff"

export const getInitialValue = (): IPostItem => {
    return {
        title: '',
        body: '',
        id: new Date().valueOf()
    }
}