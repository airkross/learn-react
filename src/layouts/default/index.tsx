import { FC, useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomLoader from '../../components/common/custom-loader';
import { AuthContext } from '../../context/auth-context';

import NavigationMenu from './components/navigation-menu';
import { privatRoutes, publicRoutes } from './constants';
import styles from './styles.module.css'


const DefaultLayout: FC = () => {
    const { isAuth, isAppLoading } = useContext(AuthContext)

    if(isAppLoading) {
        return (
            <div className={styles.loader}><CustomLoader /></div>
        )
    }

    return (
        <BrowserRouter>
            <NavigationMenu />
            <div className={styles.content}>
                {
                    isAuth
                        ? (
                            <Routes>
                                {
                                    privatRoutes.map((route, index) => (
                                        <Route key={index} {...route} />
                                    ))
                                }
                                {/* <Route path="/*" element={<Navigate to="/posts" replace />} /> */}
                            </Routes>
                        )
                        : (
                            <Routes>
                                {
                                    publicRoutes.map((route, index) => (
                                        <Route key={index} {...route} />
                                    ))
                                }
                            </Routes>
                        )
                }
            </div>
        </BrowserRouter>
    )
}

export default DefaultLayout