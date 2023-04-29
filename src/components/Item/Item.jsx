import React from "react";

const Item = ({ product }) => {
  const { img, title, description, price } = product;
    return (
      <div className="card" style={{ width: '20rem', margin: '.5rem' }}>
{      <img src={img} className="card-img-top" alt={title} /> }
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{description}</p>
          <p className="card-text">${price}</p>
          <button className="btn btn-primary">Ver más</button>
        </div>
      </div>
    );
  };
  export default Item;
