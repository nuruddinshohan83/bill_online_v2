import React, { useContext, useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { UserContext } from '../context/UserProvider'
export default function Redirect() {
    let [exist, setExist] = useState(null)
    let [flage, setFlage] = useState()
    let userData = useContext(UserContext)
    /*
        this Component will check if user is logged in for first time
        or its a old user 
        and it will redirect it to automatically to
            -a form (first time logged in)
            -to dashboard (regular user)
    */


    //    console.log("Login Redirect userdata", userData)
    useEffect(() => {
        //        console.log("fetch profile useEffect")
        fetchProfile()
    }, [userData])
    //if user 
    async function fetchProfile() {
        console.log("checks if comapany details exits")
        if (userData) {
            const { data, error } = await supabase
                .from('profiles')
                .select('id')
                .eq('id', userData.id)
            setExist(data)
            console.log('quary ', data)
            if (data) {
                let length = data.length
                console.log(length)
                if (length === 0)
                    setFlage(false)
                else if (length > 0)
                    setFlage(true)
            }
        }
    }
    return (
        <div>
            <p>Redircted page</p>
            {
                (flage == true) && <p>Company data exist</p>
            }
            {
                (flage == false) && <p>Company don't exist</p>
            }
        </div>
    )
}
