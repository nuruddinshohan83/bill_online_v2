import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import { supabase } from '../utils/supabaseClient';
import UserProvider from '../context/UserProvider';
import SignInWithGoogle from '../components/SignInWithGoogle';
import SignOut from '../components/SignOut';
import Comp from '../components/Comp';
import Redirect from '../components/Redirect';
function App() {
  return (
    <UserProvider>
      <Redirect></Redirect>
      <SignInWithGoogle></SignInWithGoogle>
      <SignOut></SignOut>
      <Comp>
      </Comp>
    </UserProvider>
  )
}

export default App;