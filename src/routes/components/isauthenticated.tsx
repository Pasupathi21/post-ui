import React from 'react'
import { Navigate } from 'react-router-dom'
import { APP_ROUTES } from '../route.const' 

export default function IsAuthenticated({children, ...res}: any) {
    console.log("is authenticated >>>>")
   if(true){
    <Navigate to={APP_ROUTES.APP.path} />
   } 
  return children
}
