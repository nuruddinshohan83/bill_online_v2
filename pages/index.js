import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { supabase } from '../utils/supabaseClient';

function App() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const router = useRouter()
  useEffect(() => {
    /* when the app loads, check to see if the user is signed in */
    checkUser();
    /* check user on OAuth redirect */
    window.addEventListener('hashchange', function () {
      checkUser();
    });
  }, [])
  useEffect(() => {
    async function exist() {
      console.log("exit func")
      const { data, error } = await supabase
        .from('profiles')
        .select("id")
        .eq('id', user.id)
      setData(data)
      setError(error)

      console.log(data)
      console.log(error)

    }
    if (user) {
      exist()
    }
  }, [user])

  async function checkUser() {
    /* if a user is signed in, update local state */

    const user = supabase.auth.user();
    //const userId = supabase.auth.user
    console.log(user)
    if (user) {
      setUser(user)
    }
  }
  async function signInWithGoogle() {
    /* authenticate with GitHub */
    await supabase.auth.signIn({
      provider: 'google'
    });
  }
  async function signOut() {
    /* sign the user out */
    await supabase.auth.signOut();
    setUser(null);
  }
  if (user) {
    //router.push("/test")
    if (data.length == 0) {


      return (<div>
        <p>empty</p>
        <button onClick={signOut}>Sign out</button>
      </div>)


    }
    else {

      return (
        <div className="App">
          <h1>Hello, {user.email}</h1>
          <button onClick={signOut}>Sign out</button>
        </div>
      )
    }
  }
  return (
    <div className="App">
      <h1>Hello, please sign in!</h1>
      <button onClick={signInWithGoogle}>Sign In</button>
    </div>
  );
}

export default App;