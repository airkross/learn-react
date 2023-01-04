import { FC } from 'react'

import styles from './styles.module.css'

const CustomTextarea: FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return (
    <textarea className={styles.customTextarea} {...props}/>
  )
}

export default CustomTextarea