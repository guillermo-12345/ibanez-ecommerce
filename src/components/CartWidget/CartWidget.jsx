import React from 'react';

const CartWidget = ({contador})=> {
    return (
        <div className=' text-bg-warning text-lg-end p-2' >
             <span className=' rounded-1 p-1 m-1 bg-body-secondary'>🛒 {contador}</span>
        </div>
    )
}
    export default CartWidget