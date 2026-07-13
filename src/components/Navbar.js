import { useState } from 'react';   // Not needed here actually, but okay to keep

function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a 
          className="navbar-brand fw-bold fs-3" 
          href="#" 
          onClick={() => setCurrentPage('home')}
        >
          🍰 SweetDelight
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCurrentPage('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cakes">Cakes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">about</a>
            </li>

            <li className="nav-item ms-3">
              <button 
                className="btn btn-outline-light me-2" 
                onClick={() => setCurrentPage('login')}
              >
                Login
              </button>
            </li>
            
            <li className="nav-item">
              <button 
                className="btn btn-light" 
                onClick={() => setCurrentPage('signup')}
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;