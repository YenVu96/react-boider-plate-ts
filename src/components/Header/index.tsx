import React from 'react';
import Information from './Information';
import NavBar from './NavBar';

const Header: React.FC = (props) => {
  return (
    <div className="header">
      {/* <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link> */}
      <Information />
      <NavBar />
    </div>
  );
};

export default Header;
