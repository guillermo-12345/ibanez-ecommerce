import React from 'react';

const CartWidget = ({contador})=> {
    return (
        <div className=' text-bg-warning text-lg-end p-1' >
             <span className=' bg-body-secondary'>🛒 {contador}</span>
        </div>
    )
}
    export default CartWidget