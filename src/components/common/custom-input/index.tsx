import { FC } from 'react'

import styles from './styles.module.css'
import { CustomInputType } from './types'

const CustomInput: FC<CustomInputType> = (props) => {
  return (
    <input className={styles.customInput} {...props}/>
  )
}

export default CustomInput