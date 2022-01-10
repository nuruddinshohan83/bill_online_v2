import React from 'react'
import { supabase } from '../utils/supabaseClient'
export default function SignOut() {
    async function signOut() {
        /* sign the user out */
        await supabase.auth.signOut();
        console.log("sign out")
        // setUser(null);
    }
    return (
        <button onClick={signOut}>Sign out</button>
    )
}
