import { FC } from 'react'

import styles from './styles.module.css'

const CustomInput: FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input className={styles.customInput} {...props}/>
  )
}

export default CustomInput