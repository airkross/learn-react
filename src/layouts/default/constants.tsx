import { RouteProps } from 'react-router-dom'

import PostPage from '../../pages/posts-page/post-page'
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
    {
        path: "/posts/:id",
        element: <PostPage />,
    },
]