import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contack</Link>
                </li>
                <li>
                    <Link to="/help"> Help</Link>
                </li>
            </ul>
        </>
    )
}

export default Header