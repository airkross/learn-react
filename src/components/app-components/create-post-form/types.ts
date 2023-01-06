import { IPostItem } from "~/api/bff/post-bff";

export interface IProps {
    whenSubmit?: (e: IPostItem) => void
}