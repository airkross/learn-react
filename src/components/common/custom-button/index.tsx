import { FC } from 'react'

import styles from './styles.module.css'
import { CustomButtonType } from './types'

const CustomButton: FC<CustomButtonType> = ({children, className, ...props}) => {
  return (
    <button className={[styles.customButton, className].join(' ')} {...props}>
        {
            children || 'Отправить'
        }
    </button>
  )
}

export default CustomButton