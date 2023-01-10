
import { IPostItem } from '~/api/bff/post-bff'
import { IProps as ICustomModal } from '../../../../components/common/custom-modal/types'

export interface IPorps extends ICustomModal {
    whenCreatePost: (post: IPostItem) => void
}