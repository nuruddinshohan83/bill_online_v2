import React, { useContext } from 'react'
import { supabase } from '../utils/supabaseClient'
import { SignOutContext } from '../context/UserProvider';

/* 

Can be used from anywhere of the app to log out user
    -uses supabase's signout function from context 
    -it also update user context makes it null

*/

export default function SignOut() {
    let signOut = useContext(SignOutContext)
    return (
        <button
            className=' block border-solid rounded border-2 px-3 py-1 bg-purple-500 text-white font-bold'
            onClick={signOut}>
            Sign out
        </button>
    )
}
