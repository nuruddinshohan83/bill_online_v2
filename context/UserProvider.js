import React, { useContext, useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient';


//Provides logged in user info else its null 
export let UserContext = React.createContext(null)
//Provides A function witch will signout user
export let SignOutContext = React.createContext()


export default function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    useEffect(() => {
        console.log("run from effect before",)
        getUser()
        console.log("run from effect after",)
        //to detect google signin redirect 
        window.addEventListener('hashchange', function () {
            getUser();
        })
    }, [user])

    //signing out user from context and all over the app
    function singoutUser() {
        supabase.auth.signOut();
        setUser(null)
        console.log("user is removed ", user)

    }
    function getUser() {
        /* if a user is signed in, update local state */
        const data = supabase.auth.user();
        //const userId = supabase.auth.user
        console.log("getuser Function", data)
        setUser(data)
        if (data)
            console.log("not empty ")


    }
    return (
        <UserContext.Provider value={user}>
            <SignOutContext.Provider value={singoutUser}>
                {children}
            </SignOutContext.Provider>
        </UserContext.Provider>
    )
}
