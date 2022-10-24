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
                    <Link to ="/category/2" className="nav-link text-white">Camionetas </Link>     
                    </li>
                    <li className="nav-item">
                    <Link to ="/category/1" className="nav-link text-white">Autos </Link>               
                    </li>
                        <li className="nav-item dropdown">
                            <ul className="dropdown-menu">
                                <li className="nav-item">
                                <Link to ="/category/2" className="nav-link text-white">Camionetas </Link>     
                                </li>

                                <li className="nav-item">
                                <Link to ="/category/1" className="nav-link text-white">Autos </Link>               
                                </li>
                        </ul>
                    </li>

                </ul>
                </div>
            </div>
            <Link to='/cart'><CartWidget /></Link>
            </nav>
    ); 
}

export default Navbar;