import { FC } from 'react'

import styles from './styles.module.css'

const CustomButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => {
  return (
    <button className={styles.customButton} {...props}>
        {
            children || 'Отправить'
        }
    </button>
  )
}

export default CustomButton