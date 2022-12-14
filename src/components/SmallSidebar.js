import React from 'react';
import styled from 'styled-components'
//import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
//import logo from '../assets/images/logo.svg';

const SmallSidebar  = () => {
    return (
      <Wrapper>

                <h2>test</h2>
      <div
        className='' 
      >
        <div className=''>

          <button className='' >
            <h2>test</h2>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <h2>test2</h2>
          <div className='nav-links'>nav links</div>
 
        </div>
      </div>
    </Wrapper>

  );
};

const Wrapper = styled.section`
position: fixed;
min-height: 60vh;
place-items: left;
top: 100px;
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: var(--white);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    top: 200px;
  }
  .close-btn {
    position: absolute;
    top: 400px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-500);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--grey-900);
  }
  .nav-link:hover .icon {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    color: var(--grey-900);
  }
  .active .icon {
    color: var(--primary-500);
  }
`

export default SmallSidebar