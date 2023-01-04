import { FC } from 'react'
import HiddenSubmitButton from './components/hidden-submit-button'

import styles from './styles.module.css'
import { IProps } from './types'

const CustomForm: FC<IProps> = ({ children, isShownHiddenButton, ...props }) => {
  return (
    <form className={styles.customForm} {...props}>
        {
            children
        }
        {
          isShownHiddenButton && <HiddenSubmitButton />
        }
    </form>
  )
}

export default CustomForm