import { FC } from 'react'

import { CustomTextareaType } from './types'
import styles from './styles.module.css'

const CustomTextarea: FC<CustomTextareaType> = (props) => {
  return (
    <textarea className={styles.customTextarea} {...props}/>
  )
}

export default CustomTextarea