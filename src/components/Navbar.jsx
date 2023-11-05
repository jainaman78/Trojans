import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
            <div className="container">
              <div className="offcanvas offcanvas-end" tabIndex="-1" id="#offcanvas" aria-labelledby="#offcanvasLabel">
                <div className="offcanvas-body">
                  <ul className="navbar-nav flex-grow-1 justify-content-between">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/discover">Discover</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="">Plan a Trip</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="">Cashpress</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="">FAQs</Link></li>
                    <button className="btn btn-outline-success" type="submit">Register/Login</button>
                  </ul>
                </div>
              </div>
            </div>
          </nav>        
  )
}

export default Navbar
