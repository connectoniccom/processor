import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <aside className={`app-sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-sidebar" onClick={onClose}>&times;</button>
      <nav className="sidebar-nav">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="active" onClick={handleLinkClick}>Dashboard</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={handleLinkClick}>Games</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={handleLinkClick}>Leaderboard</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={handleLinkClick}>History</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={handleLinkClick}>Support</a>
      </nav>
    </aside>
  );
};

export default Sidebar;