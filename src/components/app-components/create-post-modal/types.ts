import { IPostItem } from "~/App";

import { IProps as ICustomModal } from '../../common/custom-modal/types'

export interface IPorps extends ICustomModal {
    whenCreatePost: (post: IPostItem) => void
}