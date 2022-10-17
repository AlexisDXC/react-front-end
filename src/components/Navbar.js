import React from 'react';
import logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';
import DXCLogo2CRGB from '../assets/DXC Logo 2C RGB.bmp'
import DXC from '../assets/DXC2.png'
import { Link } from 'react-router-dom'
import Divider from "@material-ui/core/Divider";


const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  return (
    <><nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={DXCLogo2CRGB} className='nav-logo' alt='' />
          </Link>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              upload
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              dashboard
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <ul className='nav-links'>
        <Link to='testregister'>
          <button className='btn signin-btn'>Sign in</button>
        </Link>
        </ul>
       
      </div>
      <Divider />
    </nav><Divider /></>
  );
};

export default Navbar;
