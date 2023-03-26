import React from 'react';
import { addToCart } from '../../utilities/math';

const Cosmetic = (props) => {
    const{name, Price} = props.cosmetic;
    return (
        <div>
            <h5>Name: {name}</h5>
            <h6>Price: {Price}</h6>
            <button onClick={() => addToCart(name)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;