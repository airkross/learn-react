import { FC } from 'react'

import styles from './styles.module.css'
import { IProps } from './types'

const CustomFormField: FC<IProps> = ({children, ...props}) => {
  return (
    <div className={styles.customFormField} {...props}>
        {children}
    </div>
  )
}

export default CustomFormField