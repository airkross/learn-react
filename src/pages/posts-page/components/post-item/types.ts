import { IPostItem } from "~/api/bff/post-bff";

export interface IProps extends IPostItem {
    whenClickDeletePost: (postId: IPostItem['id']) => void
}
