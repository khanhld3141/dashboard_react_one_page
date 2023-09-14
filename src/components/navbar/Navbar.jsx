import React from 'react'
import { AiOutlineCalendar, AiOutlineBell, AiOutlineCaretDown } from "react-icons/ai"
import { BiSearch } from 'react-icons/bi'
import avatar from '../../assests/avatar.jpg'

import './Navbar.css'
const Navbar = () => {
    let date = new Date();
    let day = date.getUTCDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return (
        <>
            <nav className='navbar'>
                <h1>Dashboard</h1>
                <div className="notification">
                    <div className="cal">
                        <AiOutlineCalendar />
                        <span>{month} </span>
                        <span>{day}, </span>
                        <span>{year}</span>
                    </div>
                    <div className='action'>
                        <BiSearch />
                    </div>
                    <div className='action'>
                        <AiOutlineBell />
                    </div>
                    <div className="avatar">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="down">
                        <AiOutlineCaretDown />
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar