import { IPostItem } from "~/api/bff/post-bff";

export interface IProps {
    error?: string
    whenSubmit?: (e: IPostItem) => void
}