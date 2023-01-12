import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import NavigationMenu from './components/navigation-menu';
import { routes } from './constants';
import styles from './styles.module.css'


const DefaultLayout: FC = () => {
    return (
        <BrowserRouter>
            <NavigationMenu />
            <div className={styles.content}>
                <Routes>
                    {
                        routes.map((route, index) => (
                            <Route key={index} {...route} />
                        ))
                    }
                    {/* <Route path="/*" element={<Navigate to="/posts" replace />} /> */}
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default DefaultLayout