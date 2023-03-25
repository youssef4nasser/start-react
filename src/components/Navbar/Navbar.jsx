import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return <>
    <nav className="navbar py-3 navbar-expand-lg text-uppercase">
    <div className="container">
        <Link className="navbar-brand fw-bold fs-2 text-white" to="/">start react</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link text-white fw-bold fs-6 active" aria-current="page" to="/prtfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-white fw-bold fs-6" to="/aboute">aboute</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-white fw-bold fs-6" to="/contact">contact</Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  </>
}

export default Navbar