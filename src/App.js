import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        const isToggleButton = event.target.closest('.sidebar-toggle-btn');
        if (!isToggleButton) {
          closeSidebar();
        }
      }
    };

    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className="app-container">
      <Header onToggleSidebar={toggleSidebar} />
      <div ref={sidebarRef}>
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      </div>
      <main className="content-area">
        <h1>Welcome to the Aviator Game</h1>
        <p>Game content will be displayed here.</p>
      </main>
    </div>
  );
}

export default App;