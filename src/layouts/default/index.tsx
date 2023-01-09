import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavigationMenu from './components/navigation-menu';
import { routes } from './constants';


const DefaultLayout: FC = () => {
    return (
        <BrowserRouter>
            <NavigationMenu />
            <Routes>
                {
                    routes.map((route, index) => (
                        <Route key={index} {...route} />
                    ))
                }
            </Routes>
        </BrowserRouter>
    )
}

export default DefaultLayout