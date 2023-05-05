import React from 'react';

const CartWidget = ({contador})=> {
    return (
        <div className=' bd-blue-100 rounded-5 text-lg-end mt-1 p-2' >
             <span className=' rounded-1 p-1 m-1 bg-body-tertiary'>🛒 {contador}</span>
        </div>
    )
}
    export default CartWidget