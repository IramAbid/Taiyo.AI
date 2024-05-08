import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import locationIcon from './location-mark.png';
import contactIcon from './contacts.png';
import '../../index.css';

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <aside className={`fixed h-custom-height mt-3 ml-3 lg:w-64 bg-white text-black rounded-lg shadow-lg mb-8 transition-all duration-300 ${isOpen ? 'lg:block' : 'hidden lg:inline-block'}`} style={{ zIndex: 999 }}>
        <div className="p-4">
          <h2 className="text-4xl font-myfont font-bold text-center my-4 text-black-500"><span className='text-orange-800 font-myfont'>Dash</span>Board</h2>
        </div>
        <nav className="flex-1">
          <ul className="space-y-4">
            <Link to="/contactPage" className="block" onClick={closeMenu}>
              <li className='flex flex-row items-center px-8 py-2 hover:bg-custom-color-hover'>
                <img src={contactIcon} alt='contact-icon' className='w-10 mr-2' />
                Contacts
              </li>
            </Link>
            <Link to="/ChartMaps" className="block" onClick={closeMenu}>
              <li className='flex flex-row items-center px-8 py-2 hover:bg-custom-color-hover'>
                <img src={locationIcon} alt='Map-icon' className='w-10 mr-2'></img>
                Maps and Charts
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
