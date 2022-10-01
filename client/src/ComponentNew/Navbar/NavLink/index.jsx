import React from 'react'

const NavLink = ({setToggleMenu}) => {
    return (
        <>
            <li onClick={()=>setToggleMenu(false)}>
                <a href="#home">Home</a>
            </li>
            <li onClick={()=>setToggleMenu(false)}>
                <a href="#about">About</a>
            </li>
            <li onClick={()=>setToggleMenu(false)}>
                <a href="#skills">Skills</a>
            </li>
            <li onClick={()=>setToggleMenu(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>setToggleMenu(false)}>
                <a href="#contact">Contact</a>
            </li>
        </>
    )
}

export default NavLink