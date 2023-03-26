import React from 'react';
import { add, multiply } from '../../utilities/math';

const Shoe = () => {
    const first = 80;
    const second = 90;
    const sum = add(first,  second);
    const total =multiply(first, second);
    return (
        <div>
            <p>Total amount by plus: {sum}</p>
            <p>Total amount by multiply: {total}</p>
        </div>
    );
};

export default Shoe;