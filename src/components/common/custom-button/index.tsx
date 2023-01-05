import { FC } from 'react'

import styles from './styles.module.css'
import { CustomButtonType } from './types'

const CustomButton: FC<CustomButtonType> = ({children, ...props}) => {
  return (
    <button className={styles.customButton} {...props}>
        {
            children || 'Отправить'
        }
    </button>
  )
}

export default CustomButton