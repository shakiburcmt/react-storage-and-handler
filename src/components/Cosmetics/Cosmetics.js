import React from 'react';
import { add, sub } from '../../utilities/calculate';


const Cosmetics = () => {
    const num1 = 45;
    const num2 = 45;
    const result = add(num1, num2);
    const result2 = sub(num1, num2);
    return (
        <div>
            <h1>Welcome to Cosmos</h1>
            <h3>Result: {result}</h3>
            <h3>Result: {result2}</h3>
        </div>
    );
};

export default Cosmetics;