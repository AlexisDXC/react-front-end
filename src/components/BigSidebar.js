import React from 'react';
import NavLinks from './NavLinks';
import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/BigSidebar';
// import { useSelector } from 'react-redux';
import { FaHome } from 'react-icons/fa';

const BigSidebar = () => {


  return (
    <Wrapper>
      <div
        className='sidebar-container show-sidebar'
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
