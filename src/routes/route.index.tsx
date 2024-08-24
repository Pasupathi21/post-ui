import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { APP_ROUTES } from './route.const'
import Home from '@/pages/home/home.index'
import Upload from '@/pages/upload/upload.index'
import Signin from '@/pages/2a/signin/signin.index'
import Signup from '@/pages/2a/signup/signup.index'
import Layout from '@/layout'
import { useState } from 'react'
import IsAuthenticated from './components/isauthenticated'
// import { Home } from 'lucide-react'

// route components

export type TAppRoute = RouteObject & {}

const PublicRoutes: TAppRoute[] = [
    {
        path: APP_ROUTES.INITIAL.path,
        element: <Signin />
    },
    {
        path: APP_ROUTES.SIGN_IN.path,
        element: <Signin />
    },
    {
        path: APP_ROUTES.SIGN_UP.path,
        element: <Signup />
    },
]

const ProtectedChildRoute: TAppRoute[] = [
    {
        path: APP_ROUTES.HOME.path,
        element: <Home />
    },
    {
        path: APP_ROUTES.UPLOAD.path,
        element: <Upload />
    }
]
const ProtectedRoutes: TAppRoute[] = [
    {
        path: APP_ROUTES.APP.path,
        element: (
            <IsAuthenticated>
                <Layout />
            </IsAuthenticated>
        ),
        children: [...ProtectedChildRoute]
    }
]
export const AppRoute: TAppRoute[] = [
    ...PublicRoutes,
    ...ProtectedRoutes
]

export const GET_APP_ROUTES = (_props?: any) => {
    const [isSignIn] = useState(true)
    return createBrowserRouter(
        isSignIn ?
        [...PublicRoutes, ...ProtectedRoutes]:
        [...PublicRoutes] 
        )
}