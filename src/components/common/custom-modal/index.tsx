import { FC } from 'react'

import styles from './styles.module.css'
import { IProps } from './types'

const CustomModal: FC<IProps> = ({ children, isShownModal, isLoading = false, setIsShownModal }) => {
    const rootClasses = [styles.customModal]
    const contentClasses = [styles.customModalContent]

    if (isShownModal) {
        rootClasses.push(styles.active)
    }

    if (isLoading) {
        contentClasses.push(styles.loading)
    }

    return (
        <div className={rootClasses.join(' ')}
            onClick={() => setIsShownModal(false)}
        >
            {
                <div className={contentClasses.join(' ')} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            }
        </div>
    )
}

export default CustomModal