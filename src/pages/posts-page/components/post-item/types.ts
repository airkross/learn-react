import { IPostItem } from "~/api/bff/post-bff";

export interface IProps extends IPostItem {
    whenClickOpenPost: (postId: IPostItem['id']) => void
    whenClickDeletePost: (postId: IPostItem['id']) => void
}
