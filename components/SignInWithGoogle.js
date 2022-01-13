import React from 'react'
import { supabase } from '../utils/supabaseClient';
/* authenticate with google */
export default function SignInWithGoogle() {
    async function signInWithGoogle() {
        await supabase.auth.signIn({
            provider: 'google'
        });
    }
    return (
        <button
            className=' block border-solid rounded border-2 px-3 py-1 bg-purple-500 text-white font-bold'
            onClick={signInWithGoogle}>
            Sign In
        </button>
    )
}
