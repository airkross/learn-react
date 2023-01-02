import React from 'react'

import styles from './styles.module.css'

const CustomTextarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return (
    <textarea className={styles.customTextarea} {...props}/>
  )
}

export default CustomTextarea