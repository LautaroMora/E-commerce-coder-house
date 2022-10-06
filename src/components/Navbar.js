import React from "react";
import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom';


function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
            <Link to='/' className="navbar-brand text-white" >Vehiculos del Plata</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> 
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" >Quienes Somos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" >Contacto</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Alquilar
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <Link to ='/category/1' className="dropdown-item " >Autos</Link>
                        </li>

                        <li>
                            <Link to ='/category/2' className="dropdown-item" >Camionetas</Link>
                        </li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" >Consultanos</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled text-white">Blog</a>
                    </li>
                </ul>
                </div>
            </div>
            <Link to='/cart'><CartWidget /></Link>
            </nav>
    ); 
}

export default Navbar;