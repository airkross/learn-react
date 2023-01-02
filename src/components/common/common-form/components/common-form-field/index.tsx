import React from 'react'

import styles from './styles.module.css'
import { IProps } from './types'

const CommonFormField: React.FC<IProps> = ({children, ...props}) => {
  return (
    <div className={styles.commonFormField} {...props}>
        {children}
    </div>
  )
}

export default CommonFormField