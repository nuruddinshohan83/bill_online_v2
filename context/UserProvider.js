import React, { useContext, useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient';



export let UserContext = React.createContext(null)
export let RemoveUserContext = React.createContext()


export default function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    useEffect(() => {
        console.log("run from effect before",)
        getUser()
        console.log("run from effect after",)
        window.addEventListener('hashchange', function () {
            getUser();
        })
    }, [user])


    function removeUser() {

        setUser('1')
        console.log("user is removed ", user)
    }
    async function getUser() {
        /* if a user is signed in, update local state */
        const data = supabase.auth.user();
        //const userId = supabase.auth.user
        console.log("getuser Function", data)
        if (data) {
            console.log("if ")
            setUser(data)
        }
    }
    return (
        <UserContext.Provider value={user}>
            <RemoveUserContext.Provider value={removeUser}>
                {children}
            </RemoveUserContext.Provider>
        </UserContext.Provider>
    )
}
