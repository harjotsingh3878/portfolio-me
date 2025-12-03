import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { toggleTheme } from '../store/slices/themeSlice';
import '../styles/layout.css';

const Layout = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { mode } = useSelector((state) => state.theme);

  return (
    <div className={`layout ${mode}`}>
      <nav className="navbar">
        <div className="nav-brand">Portfolio MFE</div>
        <div className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/transactions">Transactions</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/notifications">Notifications</Link>
        </div>
        <div className="nav-actions">
          <button onClick={() => dispatch(toggleTheme())}>
            {mode === 'light' ? '🌙' : '☀️'}
          </button>
          <span>Welcome, {user?.name}</span>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
