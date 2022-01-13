import React from 'react'
import ComapnyInfo from '../../components/info/ComapnyInfo'
import UserProvider from '../../context/UserProvider'
import SignOut from '../../components/SignOut'
/*
Test Component
*/
export default function Info() {
    return (
        <UserProvider>
            <p>Company info</p>
            <ComapnyInfo></ComapnyInfo>
            <SignOut></SignOut>
        </UserProvider>
    )
}
