import React from 'react'
import { supabase } from '../utils/supabaseClient';

export default function SignInWithGoogle() {
    async function signInWithGoogle() {
        /* authenticate with google */
        await supabase.auth.signIn({
            provider: 'google'
        });
    }

    return (
        <button onClick={signInWithGoogle}>Sign In</button>
    )
}
