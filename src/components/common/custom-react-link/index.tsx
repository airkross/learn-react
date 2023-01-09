import { FC } from 'react'
import { Link } from 'react-router-dom'

import { IProps } from './types'
import styles from './styles.module.css'

const CustomReactLink: FC<IProps> = ({ children, className, ...props }) => {
  return (
    <Link className={[styles.customReactLink, className].join(' ')} {...props}>
        {children}
    </Link>
  )
}

export default CustomReactLink