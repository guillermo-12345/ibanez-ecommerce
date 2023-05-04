import React from "react";
import {Link} from 'react-router-dom';

const Item = ({ product }) => {

  const {id, img, title, description, price } = product;
    return (
      <div className="card shadow" style={{ width: '20rem', margin: '.5rem' }}>
       <img src={img} className="card-img-top shadow rounded-2 p-3" alt={title} /> 
        <div className="card-body">
          <p className=" text-uppercase card-title">{title}</p>
          <p>
        <a className="btn btn-light" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Mostrar Descripcion
        </a>
      </p>
        <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <p className=" text-body-secondary">{description}</p>
        </div>
      </div>
          
          <p className=" card-footer">${price}</p>
          <Link to={`/product/${id}`} > <button varirant='primary' className="btn btn-primary">Ver más</button></Link>
        </div>
      </div>
    );
  };
  export default Item;
