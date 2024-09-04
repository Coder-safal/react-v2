import React, { useState } from 'react'
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

function Login() {
    const [input, setInput] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {

        setUser({ input, password });
    }

    return (
        <>
            <input type="text"
                placeholder='userName'
                onChange={(e) => setInput(e.target.value)}
            />
            <input type="password"
                placeholder='Enter password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login