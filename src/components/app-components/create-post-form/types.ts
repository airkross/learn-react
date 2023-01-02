import { IPostItem } from '~/App'

export interface IProps {
    whenSubmit?: (e: IPostItem) => void
}