import { FC } from 'react'

import CustomReactNavLink from '../custom-react-nav-link'
import { menuItems } from './constants'
import styles from './styles.module.css'

const NavigationMenu: FC = () => {
    return (
        <div className={styles.navigationMenu}>
            {
                menuItems.map(({ children, to }, index) => (
                    <CustomReactNavLink key={index} to={to}>
                        {children}
                    </CustomReactNavLink>
                ))
            }
        </div>
    )
}

export default NavigationMenu