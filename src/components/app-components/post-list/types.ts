import { IProps as IPostItemProps } from "@components/app-components/post-item/types"
import { IPostListItems } from "~/App"

export interface IProps {
    posts: IPostListItems['posts']
    whenClickDeletePost: IPostItemProps['whenClickDeletePost']
}