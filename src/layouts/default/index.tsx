import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default DefaultLayout