import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1>Laptop Store</h1>
            <Link  to="/"><button style={linkStyle}>Home</button></Link>
            <Link  to="/cart"><button style={linkStyle}>Cart</button></Link>
        </header>
    )
}

const linkStyle = {
    textDecoration: 'none',
    padding: '10px',
    margin: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
    border: '1px solid black',
    cursor: 'pointer',
    width: '200px',
}
