import { FC, useContext } from 'react'
import CustomButton from '../../../../components/common/custom-button'
import { AuthContext } from '../../../../context/auth-context'

import CustomReactNavLink from '../custom-react-nav-link'
import { menuItems } from './constants'
import styles from './styles.module.css'

const NavigationMenu: FC = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const handleLogoutClick = () => {
        localStorage.removeItem('isAuth')
        setIsAuth(false)
    }

    return (
        <div className={styles.navigationMenu}>
            {
                isAuth && (
                    <>
                        {
                            menuItems.map(({ children, to }, index) => (
                                <CustomReactNavLink key={index} to={to}>
                                    {children}
                                </CustomReactNavLink>
                            ))
                        }
                        <CustomButton className={styles.logout} onClick={handleLogoutClick}>
                            Выйти
                        </CustomButton>
                    </>
                )
            }
        </div>
    )
}

export default NavigationMenu