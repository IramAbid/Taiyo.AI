import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import locationIcon from './location-mark.png';
import contactIcon from './contacts.png';
import '../../index.css';

/**
 * Sidebar component renders the navigation sidebar.
 */
const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Sidebar */}
      <aside className={`fixed h-custom-height mt-3 ml-3 lg:w-64 bg-white text-black rounded-lg shadow-lg mb-8 transition-all duration-300 ${isOpen ? 'lg:block' : 'hidden lg:inline-block'}`} style={{ zIndex: 999 }}>
        <div className="p-4">
          <h2 className="text-4xl font-myfont font-bold text-center mt-8 mb-4 text-custom-black"><span className='text-custom-blue font-myfont'>Dash</span>Board</h2>
        </div>
        <nav className="flex-1">
          <ul className="space-y-4">
            {/* Link to Contact Page */}
            <Link to="/contact-page" className="block" onClick={closeMenu}>
              <li className='flex flex-row items-center px-8 py-2 hover:bg-custom-light-blue'>
                <img src={contactIcon} alt='contact-icon' className='w-10 mr-2' />
                <h4 >Contacts</h4>
              </li>
            </Link>
            {/* Link to Chart and Maps Page */}
            <Link to="/chart-maps" className="block" onClick={closeMenu}>
              <li className='flex flex-row items-center px-8 py-2 hover:bg-custom-light-blue'>
                <img src={locationIcon} alt='Map-icon' className='w-10 mr-2'></img>
                <h4 >Maps & Charts</h4>
              </li>
            </Link>
          </ul>
        </nav>
      </aside>
      
      {/* Hamburger menu */}
      <div className="fixed top-0 left-0 z-50 p-4 cursor-pointer lg:hidden" onClick={toggleMenu} style={{ zIndex: 999 }}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>
    </>
  );
};

export default SideBar;
