import { IProps as IPostItemProps } from "@components/app-components/post-item/types"
import { PostListItemsType } from "~/api/bff/post-bff"

export interface IProps {
    posts: PostListItemsType
    whenClickDeletePost: IPostItemProps['whenClickDeletePost']
}