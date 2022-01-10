import React, { useContext } from 'react'
import { UserContext, SignOutContext } from '../context/UserProvider'

export default function Comp() {
    const data = useContext(UserContext)
    const removeData = useContext(SignOutContext)

    console.log("form comp", data)
    return (
        <div>
            <h1>From Comp</h1>
            <button onClick={removeData}>Signout User</button>
        </div>
    )
}
