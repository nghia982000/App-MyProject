import React from 'react'
import { useState } from 'react'
import NavLink from './NavLink'
import Sidebar from './Sidebar'
import './style.scss'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className="nav">
            <div className='navBar '>
                <div className="navHeaderLogo">
                    Nghia Nguyen
                </div>
                <div className="navHeaderBtn" onClick={()=>setToggleMenu(true)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <ul className="navLink">
                    <NavLink setToggleMenu={setToggleMenu}/>
                </ul>
            </div>
            {
                toggleMenu && (
                    <Sidebar setToggleMenu={setToggleMenu} />
                )
            }
        </div>
    )
}

export default Navbar