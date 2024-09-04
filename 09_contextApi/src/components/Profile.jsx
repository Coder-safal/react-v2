import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext);

    return (
        <>
            <h1>Username is: {user.input}</h1>
            <h1>password is: {user.password}</h1>
        </>
    )

}

export default Profile