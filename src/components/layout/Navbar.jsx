import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AboutModal from '../modal/AboutModal';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const onClose = () => setOpenModal(false);
  const onOpen = () => setOpenModal(true);

  return (
    <nav className='navbar'>
      <div className='menu-icon' onClick={() => setOpenMenu(!openMenu)}>
        <span className={`${openMenu ? 'fas fa-times' : 'fas fa-bars'}`}></span>
      </div>
      <div className='logo'>Matan App</div>
      <div className={`navbar__items ${openMenu ? 'active' : ''}`}>
        <li>
          <NavLink to='/' exact activeClassName='navbar-active'>
            Home
          </NavLink>
        </li>
        <li>
          <a href='#/' onClick={onOpen}>
            About
          </a>
        </li>
        <li>
          <NavLink to='/blogs' exact activeClassName='navbar-active'>
            Blogs
          </NavLink>
        </li>
        <li>
          <a href='#/'>Contact</a>
        </li>
        <li>
          <a href='#/'>Feedback</a>
        </li>
      </div>
      <div className='search-icon' onClick={() => setOpenSearch(!openSearch)}>
        <span className='fas fa-search'></span>
      </div>
      <form action='#' className={`${openSearch ? 'active' : ''}`}>
        <input type='text' className='search-data' placeholder='Search' />
        <button type='submit' className='fas fa-search'></button>
      </form>
      <AboutModal openModal={openModal} onClose={onClose} />
    </nav>
  );
};

export default Navbar;
