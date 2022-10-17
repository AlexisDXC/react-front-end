import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import React from 'react';
import ReactDOM from 'react-dom';

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className='nav-links2'>
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return 'nav-link active';
            }}
            key={id}
            onClick={toggleSidebar}
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
