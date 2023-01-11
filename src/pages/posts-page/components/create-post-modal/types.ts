
import { IPostItem } from '~/api/bff/post-bff'
import { IProps as ICustomModal } from '../../../../components/common/custom-modal/types'

export interface IPorps extends ICustomModal {
    error: string
    whenCreatePost: (post: IPostItem) => void
}