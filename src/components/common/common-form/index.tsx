import React from 'react'
import HiddenSubmitButton from './components/hidden-submit-button'

import styles from './styles.module.css'
import { IProps } from './types'

const CommonForm: React.FC<IProps> = ({ children, isShownHiddenButton, ...props }) => {
  return (
    <form className={styles.commonForm} {...props}>
        {
            children
        }
        {
          isShownHiddenButton && <HiddenSubmitButton />
        }
    </form>
  )
}

export default CommonForm