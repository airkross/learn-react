import { FC } from 'react'
import CustomModal from '../../../../components/common/custom-modal'

import CreatePostForm from '../create-post-form'
import { IPorps } from './types'
import styles from './styles.module.css'

const CreatePostModal: FC<IPorps> = ({ isShownModal, isLoading, error, setIsShownModal, whenCreatePost }) => {
  return (
        <CustomModal
            isShownModal={isShownModal}
            isLoading={isLoading}
            setIsShownModal={setIsShownModal}
        >
            <div className={styles.createPostModal}>
                <CreatePostForm
                    error={error}
                    whenSubmit={whenCreatePost}
                />
            </div>
        </CustomModal>
  )
}

export default CreatePostModal