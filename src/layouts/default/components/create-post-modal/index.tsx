import { FC } from 'react'
import CustomModal from '../../../../components/common/custom-modal'

import CreatePostForm from '../create-post-form'
import { IPorps } from './types'
import styles from './styles.module.css'

const CreatePostModal: FC<IPorps> = ({ isShownModal, setIsShownModal, whenCreatePost }) => {
  return (
        <CustomModal
            isShownModal={isShownModal}
            setIsShownModal={setIsShownModal}
        >
            <div className={styles.createPostModal}>
                <CreatePostForm 
                    whenSubmit={whenCreatePost}
                />
            </div>
        </CustomModal>
  )
}

export default CreatePostModal