import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserProvider'
import { supabase } from '../../utils/supabaseClient'

export default function ComapnyInfo() {
    const [profileData, setProfileData] = useState(null)
    const [loading, setLoading] = useState(true)
    let userData = useContext(UserContext)
    useEffect(() => {
        if (userData != null) {
            fetchProfileData()
        }
    },
        [userData])
    async function fetchProfileData() {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userData.id)
        console.log(data)
        setProfileData(data)
        setLoading(false)
    }
    if (userData != null) {
        return (
            <div>
                <p>Id {userData.id}</p>
                {(loading) ? <p>Loading</p> :
                    <div>
                        <p>User Name {profileData[0].username}</p>
                        <p>Comapany {profileData[0].companyname}</p>
                        <p>Address {profileData[0].address}</p>
                        <p>Phone {profileData[0].phonenum}</p>
                    </div>}
            </div>)
    }
    else
        return (
            <div>
                Getting user data
            </div>
        )
}
