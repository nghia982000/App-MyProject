import React from 'react'
import NavLink from '../NavLink'
import './style.scss'

const Sidebar = ({setToggleMenu}) => {
    return (
        <div className='sideBar'>
            <div className="sideBarBtn" onClick={()=>setToggleMenu(false)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
            <ul className='sidebarLink'>
                <NavLink setToggleMenu={setToggleMenu}/>
            </ul>
        </div>
    )
}

export default Sidebar