import { FC } from 'react'

import styles from './styles.module.css'
import { IProps } from './types'

const CustomModal: FC<IProps> = ({ children, isShownModal, setIsShownModal }) => {
    const classes = [styles.customModal]

    if(isShownModal) {
        classes.push( styles.active)
    }

    return (
        <div className={classes.join(' ')}
            onClick={() => setIsShownModal(false)}    
        >
            <div className={styles.customModalContent} onClick={(e) => e.stopPropagation()}>
                { children }
            </div>
        </div>
    )
}

export default CustomModal