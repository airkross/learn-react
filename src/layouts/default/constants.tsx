import { RouteProps } from 'react-router-dom'

import HomePage from '../../pages'
import PostsPage from '../../pages/posts-page'
import ErrorPage from '../error'

export const routes: Array<RouteProps> = [
    {
        path: '/*',
        element: <ErrorPage />,
    },
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/posts",
        element: <PostsPage />,
    },
]