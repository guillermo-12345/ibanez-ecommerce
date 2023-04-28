// const ButttonCelulares =<button>Celulares</button>
// const ButttonTablets =<button>Tablets</button>
// const ButttonNotebooks =<button>Notebooks</button>
import React from "react"
import CartWidget from "../CartWidget/CartWidget"
import 'bootstrap';
import ItemCount from "../ItemCount/ItemCount";
const NavBar=()=>{
    return (
        <header className="header">         
            <nav className="navbar sticky-top bg-body-tertiary" data-bs-theme="light">
                <a className="navbar-brand" href="#">
                    <img src="logo.png" alt="Logo"  width="30" height="30" className="p-1 d-inline-block align-text-top"/>
                    Ibanez E-Commerce
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                    <li className="nav-item dropdown"><a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Productos</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Notebooks</a></li>
                            <li><a class="dropdown-item" href="#">Notebooks 2</a></li>
                            <li><hr class="dropdown-divider"></hr></li>
                            <li><a class="dropdown-item" href="#">Celulares</a></li>
                            <li><a class="dropdown-item" href="#">Celulares2</a></li>
                            <li><hr class="dropdown-divider"></hr></li>
                            <li><a class="dropdown-item" href="#">Tablets</a></li>
                            <li><a class="dropdown-item" href="#">Tablets2</a></li>
                        </ul>
                        <li className="nav-item"><a className="nav-link"  href="#">About us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
                    </li>
                </ul>
                
            </nav>
            <CartWidget contador={10} />
        </header>
    )
}
export default NavBar