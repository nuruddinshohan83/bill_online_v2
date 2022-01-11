import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import { supabase } from '../utils/supabaseClient';
import UserProvider from '../context/UserProvider';
import SignInWithGoogle from '../components/SignInWithGoogle';
import SignOut from '../components/SignOut';
import Comp from '../components/Comp';
import LoginRedirect from '../components/LoginRedirect';
function App() {
  return (
    <UserProvider>
      <LoginRedirect>

      </LoginRedirect>
      <SignInWithGoogle></SignInWithGoogle>
      <Comp>
      </Comp>
    </UserProvider>
  )
}

export default App;