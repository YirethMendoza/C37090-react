import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className='logo' src="./img/logocava.png" alt="Logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Promociones</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Cervezas</a></li>
                  <li><a className="dropdown-item" href="#">Tequilas</a></li>
                  <li><hr className="dropdown-divider" />Vinos</li>
                  <li><a className="dropdown-item" href="#">Tinto</a></li>
                  <li><a className="dropdown-item" href="#">Blanco</a></li>
                </ul>
              </li>
            </ul>
            <CartWidget/> 
          </div>
        </div>
      </nav>
            
        </>
    );
}

export default Navbar;
