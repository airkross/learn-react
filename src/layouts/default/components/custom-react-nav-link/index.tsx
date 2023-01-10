import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { IProps } from './types'
import styles from './styles.module.css'

const CustomReactNavLink: FC<IProps> = ({ children, ...props }) => {
  return (
    <NavLink className={({ isActive }) => isActive ? [styles.customReactNavLink, styles.active].join(' ') : styles.customReactNavLink} {...props}>
      {children}
    </NavLink>
  )
}

export default CustomReactNavLink