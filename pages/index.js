import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import { supabase } from '../utils/supabaseClient';
import UserProvider from '../context/UserProvider';
import SignInWithGoogle from '../components/SignInWithGoogle';
import SignOut from '../components/SignOut';
import Comp from '../components/Comp';
function App() {
  return (
    <UserProvider>
      <h1>App</h1>
      <SignInWithGoogle></SignInWithGoogle>
      <Comp>
      </Comp>
    </UserProvider>
  )
}

export default App;