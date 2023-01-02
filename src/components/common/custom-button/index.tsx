import React from 'react'

import styles from './styles.module.css'

const CustomButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => {
  return (
    <button className={styles.customButton} {...props}>
        {
            children || 'Отправить'
        }
    </button>
  )
}

export default CustomButton