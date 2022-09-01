import React from 'react';
import logo from '../../assets/logoClima.png'
import SearchBar from '../SearchBar/SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="navbar-brand">
          Climate around the World
          <img id="logo" src={logo} width="45" height="45" alt="logo not found" />
        </span>
      </Link>
      <Link to="/about">
        <span className="about">about</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
