import React from "react"
import CartWidget from "../CartWidget/CartWidget"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from "react-router-dom";
import '../../index.css';


const NavBar=()=>{
    return (
      
      <>
        {[/*false , 'sm', 'md', 'lg', 'xl',*/ 'xxl' ].map((expand) => (
             
          <Navbar key={expand}   sticky="top" bg="light" expand={expand} className="  mb-3">
            <Container fluid>
              <a className="navbar-brand text-opacity-20 text-primary bg-opacity-100"  href={"/"}>
                          <span className=" fw-bolder">Ibanez E-Commerce</span>
                          <img src="../logo.png" alt="Logo"  width="80" height="80" className=" shadow-none  opacity-100 mx-3"/>
              </a>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Ibanez E-Commerce
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="inactive"  to={"/"}>Home</NavLink>
                  <NavDropdown
                    title="Productos"
                    className="drop" 
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavLink className="inactive"  to={"/category/notebook"}>Notebooks</NavLink>
                    <NavLink className="inactive" to={"/category/celular"}>Celulares</NavLink>
                    <NavLink className="inactive"  to={"/category/tablet"}>Tablets</NavLink>
                  </NavDropdown>
                  <NavLink className="inactive"  to={"/contact"}>Contacto</NavLink>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Proximamente..."
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body><CartWidget className=' rounded-5' key={expand} bg="light" expand={expand} />
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
        
        ))}
      
    </>
    
  );
}



/* const NavBar=()=>{
    return (
        <header className="header">         
            <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="light">
                <div className="container-fluid">
                    <Link className="navbar-brand text-opacity-20 text-primary" to={"/"}>
                        Ibanez E-Commerce<img src="../logo.png" alt="Logo"  width="30" height="30" className="mx-3"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link active" to={"/"}>Home</Link></li>
                            <div className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">Productos</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" to="#">Notebooks</a></li>
                                    <li><a className="dropdown-item" to="#">Notebooks 2</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" to="#">Celulares</a></li>
                                    <li><a className="dropdown-item" to="#">Celulares2</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" to="#">Tablets</a></li>
                                    <li><a className="dropdown-item" to="#">Tablets2</a></li>
                                </ul>
                            </div>
                            <li className="nav-item"><a className="nav-link"  to="#">About us</a></li>
                            <li className="nav-item"><Link className="nav-link"  to={"/contact"}>Contacto</Link></li>
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
} */
export default NavBar