import { IProps as IPostItemProps } from "../post-item/types"
import { PostListItemsType } from "~/api/bff/post-bff"

export interface IProps {
    posts: PostListItemsType
    whenClickDeletePost: IPostItemProps['whenClickDeletePost']
}