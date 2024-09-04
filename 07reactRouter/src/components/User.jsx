
import React from 'react'
import { useParams } from 'react-router-dom'



function User() {
    const { username } = useParams();
    return (
        <div
        className='bg-orange-800 text-black h-32 text-center pt-10'
        >
            User:{username}
        </div>
    )
}

export default User