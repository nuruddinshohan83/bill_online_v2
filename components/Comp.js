import React, { useContext } from 'react'
import { UserContext, RemoveUserContext } from '../context/UserProvider'

export default function Comp() {
    const data = useContext(UserContext)
    const removeData = useContext(RemoveUserContext)

    console.log("form comp", data)
    return (
        <div>
            <h1>From Comp</h1>
            <button onClick={removeData}>Remove User</button>
        </div>
    )
}
