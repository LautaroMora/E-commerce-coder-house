import React from "react";
import CartWidget from "./CartWidget";


function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Vehiculos del Plata</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" href="#">Quienes Somos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" href="#">Contacto</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Alquilar
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item " href="#">Autos</a></li>
                        <li><a className="dropdown-item" href="#">Camionetas</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Consultanos</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled text-white">Blog</a>
                    </li>
                </ul>
                </div>
            </div>
            <CartWidget />
            </nav>
    ); 
}

export default Navbar;