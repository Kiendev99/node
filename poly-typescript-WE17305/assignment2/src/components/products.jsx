import React from 'react';

function Product ( { name, price, onAddToCart } )
{
    return (
        <div>
            <h2>{ name }</h2>
            <p>${ price.toFixed( 2 ) }</p>
            <button onClick={ onAddToCart }>Add to Cart</button>
        </div>
    );
}

export default Product;