import { IPostItem } from "~/App";

export interface IProps extends IPostItem {
    whenClickDeletePost: (postId: IPostItem['id']) => void
}
