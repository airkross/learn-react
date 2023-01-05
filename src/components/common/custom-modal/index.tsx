import { FC } from 'react'

import styles from './styles.module.css'
import { IProps } from './types'

const CustomModal: FC<IProps> = ({ children, isShownModal, setIsShownModal }) => {
  return (
    <div className={[
        styles.customModal,
        isShownModal 
            ? styles.active
            : ''
        ].join(' ')}
        onClick={() => setIsShownModal(false)}    
    >
        <div className={styles.customModalContent} onClick={(e) => e.stopPropagation()}>
            { children }
        </div>
    </div>
  )
}

export default CustomModal