import React  from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import {
  AiOutlineAppstore,
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiOutlineLogout,
  AiOutlineMessage,
  AiOutlinePieChart,
  AiOutlineSetting,
  AiOutlineUsergroupAdd,
  AiFillCodeSandboxCircle,
} from 'react-icons/ai';
import { SiAccusoft } from 'react-icons/si'
const Sidebar = () => {
  return (
    <section className='sidebar'>
      <div className="top">
        <div className="brand">
          <AiFillCodeSandboxCircle />
          <span>LĐK REACT</span>
        </div>
        <nav className="link">
          <ul>
            <li>
              <NavLink exact={true} to='/' >
                <AiOutlineAppstore />
                <span className='border'>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/orders'>
                <AiOutlineShoppingCart />
                <span className='border'>Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/products'>
                <AiOutlineShopping />
                <span className='border'>Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/overviews'>
                <AiOutlinePieChart />
                <span className='border'>Overviews</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/customers'>
                <AiOutlineUsergroupAdd />
                <span className='border'>Customers</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/messages'>
                <AiOutlineMessage />
                <span className='border'>Messages</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/settings'>
                <AiOutlineSetting/>
                <span className='border'>Settings</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="map">
        <SiAccusoft/>
        <span>Unlock more information <br /><br />
          Upgrade to <strong>PRO</strong>
        </span>
      </div>
      <div className="logout">
        <NavLink to='/'>
          <AiOutlineLogout/>
          <span>Log Out</span>
        </NavLink>
      </div>
    </section>
  )
}


export default Sidebar