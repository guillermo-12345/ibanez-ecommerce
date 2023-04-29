import React from 'react';
import Item from '../Item/Item';

export const ItemList = ({ productsFetch }) => {
    return (
        <div className="container">
        <div className="d-flex justify-content-aroud flex-wrap">
        {productsFetch.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div></div>
    );
  };
  

