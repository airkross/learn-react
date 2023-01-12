import { Navigate, RouteProps } from 'react-router-dom'

import PostPage from '../../pages/posts-page/post-page'
import HomePage from '../../pages'
import PostsPage from '../../pages/posts-page'
import LoginPage from '../../pages/login-page'

export const privatRoutes: Array<RouteProps> = [
    {
        path: '/*',
        element:  <Navigate to="/" replace />,
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

export const publicRoutes: Array<RouteProps> = [
    {
        path: '/*',
        element: <Navigate to="/login" replace />,
    },
    {
        path: '/login',
        element: <LoginPage />
    }
]