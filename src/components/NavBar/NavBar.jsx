import React from "react"
import CartWidget from "../CartWidget/CartWidget"
import 'bootstrap';
import ItemCount from "../ItemCount/ItemCount";

const NavBar=()=>{
    return (
        <header className="header">         
            <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="light">
                <div className="container-fluid">
                    <a className="navbar-brand text-opacity-20 text-primary" href="#">
                        Ibanez E-Commerce<img src="logo.png" alt="Logo"  width="30" height="30" className="p-1 align-text-top"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                            <div className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Productos</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Notebooks</a></li>
                                    <li><a className="dropdown-item" href="#">Notebooks 2</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="#">Celulares</a></li>
                                    <li><a className="dropdown-item" href="#">Celulares2</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="#">Tablets</a></li>
                                    <li><a className="dropdown-item" href="#">Tablets2</a></li>
                                </ul>
                            </div>
                            <li className="nav-item"><a className="nav-link"  href="#">About us</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
                        </ul>
                        <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <CartWidget contador={10} />
        </header>
    )
}
export default NavBar