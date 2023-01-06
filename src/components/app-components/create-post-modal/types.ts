
import { IPostItem } from '~/api/bff/post-bff'
import { IProps as ICustomModal } from '../../common/custom-modal/types'

export interface IPorps extends ICustomModal {
    whenCreatePost: (post: IPostItem) => void
}