import React from 'react';
import './Header.css';

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="app-header">
      <button className="sidebar-toggle-btn" onClick={onToggleSidebar}>
        &#9733;
      </button>
    </header>
  );
};

export default Header;