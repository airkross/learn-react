import { FC } from 'react'
import styles from './styles.module.css'

const CustomSeparator: FC = (props) => {
  return (
   <hr {...props} className={styles.customSeparator} />
  )
}

export default CustomSeparator