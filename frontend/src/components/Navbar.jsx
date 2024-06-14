import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <header>
                <nav className="navbar" style={{ backgroundColor: '#e3f2fd' }}>
                    <div className="left">
                        <a href="#" className='appName'>CRUD-MERN </a>
                    </div>
                    <div className="right">
                        <input type="text" placeholder='Search' className='navInput' />
                        <input type="submit" value="Search" className='navSearch' />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
